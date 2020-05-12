import React, { Component } from "react";
import "./Recipe.css";
import * as service from "../../service/index"; // los servicios no van en mayusculas

const INPUTS = {
  ESTADO: "estado",
  SUB_ESTADO: "sub_estado",
  TIPOLOGIASN3: "tipologiasN3",
  INPUTMASCARA: "inputMascara",
};
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      //isShowing: this.props.isShowing,
      inputsRequired: false,
      formRow: {
        id: "",
        mensajeAmanda: "",
        estadoSelect: "",
        subEstadoSelect: "",
        tipologiasN3Select: "",
        mascaraSelect: "",
      },
      estadosOptionArray: [],
      subEstadosOptionArray: [],
      tipologiaOptionArray: [],
      mascaraOptionArray: [],
      disabledSelect: false,
    };
    this.initSelects();
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleText = this.handleText.bind(this);
  }
  async initSelects() {
    const seleccione = { id: "", value: "SELECCIONE" };
    let { estadosOptionArray } = this.state;
    estadosOptionArray.estado = [];
    estadosOptionArray.sub_estado = [];
    estadosOptionArray.siebel_tipologias = [];
    estadosOptionArray.siebel_enmascarar = [];
    for (const key in estadosOptionArray) {
      estadosOptionArray[key].push(seleccione);
    }
    let selectService = await service.getSelectsService();
    for (const key in estadosOptionArray) {
      selectService[key].map((o) => estadosOptionArray[key].push(o));
    }

    this.setState({
      estadosOptionArray: estadosOptionArray.estado,
      subEstadosOptionArray: estadosOptionArray.sub_estado,
      tipologiaOptionArray: estadosOptionArray.siebel_tipologias,
      mascaraOptionArray: estadosOptionArray.siebel_enmascarar,
    });
  }
  componentWillReceiveProps(componenProps) {
    console.log("componenProps");
    console.log(componenProps);

    let formRow = {};
    formRow.id = componenProps.updateRow.id || "";
    formRow.estadoSelect = componenProps.updateRow.estado || "";
    formRow.subEstadoSelect = componenProps.updateRow.sub_estado || "";
    formRow.tipologiasN3Select = componenProps.updateRow.tipologiasN3 || "";
    formRow.mascaraSelect = componenProps.updateRow.mascara || "";
    formRow.mensajeAmanda = componenProps.updateRow.mensajeAmanda || "";
    this.setState({
      formRow,
      disabledSelect: componenProps.updateRow.id !== "" ? true : false,
    });
  }
  handleChange(selectElement) {
    const { formRow } = this.state;
    //debugger
    if (selectElement.target.id === INPUTS.ESTADO) {
      formRow.estadoSelect = selectElement.target.value;
      this.setState({
        formRow,
      });
    }
    if (selectElement.target.id === INPUTS.SUB_ESTADO) {
      formRow.subEstadoSelect = selectElement.target.value;
      this.setState({
        formRow,
      });
    }
    if (selectElement.target.id === INPUTS.TIPOLOGIASN3) {
      formRow.tipologiasN3Select = selectElement.target.value;
      this.setState({
        formRow,
      });
    }
    if (selectElement.target.id === INPUTS.INPUTMASCARA) {
      formRow.mascaraSelect = selectElement.target.value;
      this.setState({
        formRow,
      });
    }
  }
  handleText(e) {
    const { formRow } = this.state;
    if (e.target.id === "mensajeAmanda") {
      formRow.mensajeAmanda = e.target.value;
      this.setState({
        formRow,
      });
    }
  }
  async save(e) {
    // console.log("###### save() ######")
    const res = {
      id: this.state.formRow.id,
      estado: this.state.formRow.estadoSelect,
      sub_estado: this.state.formRow.subEstadoSelect,
      tipologiasN3: this.state.formRow.tipologiasN3Select,
      mascara: this.state.formRow.mascaraSelect,
      mensajeAmanda: this.state.formRow.mensajeAmanda,
    };
    let val = await this.validate(res);
    if (val) {
      this.setState({
        inputsRequired: false,
      });
      this.props.save(res);
      this.closeModalHandler();
    } else {
      this.setState({
        inputsRequired: true,
      });
      //alert("Rellene los campos");
    }
  }
  async validate(objectValidate) {
    var flag = true;
    for (var propertyForm in objectValidate) {
      if (objectValidate[propertyForm] === "" && propertyForm !== "id") {
        console.log(objectValidate[propertyForm]);
        flag = false;
        break;
      }
    }
    return flag;
  }
  closeModalHandler = () => {
    this.setState({
      inputsRequired: false,
    });
    this.props.closeModalHandler();
  };

  render() {
    const state = JSON.stringify(this.state);
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="row">
            </div>
            <div className="row">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" />
                <label className="custom-file-label" for="customFile">Agregue una imagen</label>
              </div>
            </div>
          </div>


          <div className="col-sm-8">
            <form>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label for="validationServer05">Tipo</label>
                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                      <input type="radio" name="options" id="option1" autocomplete="off" checked /> Active
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option2" autocomplete="off"/> Radio
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option3" autocomplete="off"/> Radio
                    </label>
                  </div>
                  <div className="invalid-feedback">Tipo</div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="validationServer04">Porción</label>
                  <select className="custom-select is-invalid">
                    <option selected>Seleccione</option>
                    <option value="1">1/4</option>
                    <option value="2">1/2</option>
                    <option value="3">1</option>
                  </select>
                  <div className="invalid-feedback">Porción</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="validationServer03">Ingrediente</label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServer03"
                    placeholder="Ingrediente"
                    required
                  />
                  <div className="invalid-feedback">Ingrediente</div>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Recipe;
