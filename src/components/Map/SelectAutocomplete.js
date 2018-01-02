import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
var options = [
    {
        value: "Capital Federal",
        label: "Capital Federal",
    },
    {
        value: "Buenos Aires",
        label: "Buenos Aires",
    },
    {
        value: "Catamarca",
        label: "Catamarca",
    },
    {
        value: "Chaco",
        label: "Chaco",
    },
    {
        value: "Chubut",
        label: "Chubut",
    },
    {
        value: "Córdoba",
        label: "Córdoba",
    },
    {
        value: "Corrientes",
        label: "Corrientes",
    },
    {
        value: "Entre Rios",
        label: "Entre Rios",
    },
    {
        value: "Formosa",
        label: "Formosa",
    },
    {
        value: "Jujuy",
        label: "Jujuy",
    },
    {
        value: "La Pampa",
        label: "La Pampa",
    },
    {
        value: "La Ríoja",
        label: "La Ríoja",
    },
    {
        value: "Mendoza",
        label: "Mendoza",
    },
    {
        value: "Misiones",
        label: "Misiones",
    },
    {
        value: "Neuquén",
        label: "Neuquén",
    },
    {
        value: "Rio Negro",
        label: "Rio Negro",
    },
    {
        value: "Salta",
        label: "Salta",
    },
    {
        value: "San Juan",
        label: "San Juan",
    },
    {
        value: "San Luis",
        label: "San Luis",
    },
    {
        value: "Santa Cruz",
        label: "Santa Cruz",
    },
    {
        value: "Santa Fe",
        label: "Santa Fe",
    },
    {
        value: "Santiago del Estero",
        label: "Santiago del Estero",
    },
    {
        value: "Tierra del Fuego",
        label: "Tierra del Fuego",
    },
    {
        value: "Tucumán",
        label: "Tucumán",
    }
];



class SelectAutocomplete extends Component {
    state = {
        selectedOption: '',
     }
    constructor(props) {
        super(props);
        
    }
    handleChange = (selectedOption) => {
        this.props.parentMethod(selectedOption);
    }

  render() {
    return (
      <FormGroup bsSize="large">
      <Select
        name="provincias"
        value=""
        className="form-control select-autocomplete"
        placeholder="Encontrá el local más cercano a tu ubicación"
        options={options}
        onChange={this.handleChange}
        Clearable="false"
        noResultsText="No se encontraron resultados"
      />
      <i className="fa fa-angle-down"></i>
      </FormGroup>
      );
  }
}
export default SelectAutocomplete;

