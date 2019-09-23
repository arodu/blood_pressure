import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addName} from '../actions/recordsActions'

const IndexRecords = ({match}) => {

  let state_name = useSelector((state) => state.records.name)
  let name = match.params.name
  const distpach = useDispatch();

  if(name === undefined){
    if(state_name!==''){
      name = state_name
    }
  }else{
    distpach( addName(name) )
  }

  return (
    <React.Fragment>
        <h2 className="text-center">Registros <strong>{name}</strong></h2>
        {
          name === undefined
          ? <div className="alert alert-warning rounded-0">
              <i className="fas fa-triangle-info fa-fw"></i>
              No hay registros para mostrar
            </div>
          : <table className="table table-striped table-hover">
              <thead className="bg-success table-dark">
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Sys</th>
                  <th scope="col">Dia</th>
                  <th scope="col">Pulse</th>
                  <th scope="col">Media</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>Sys</td>
                  <td>Dia</td>
                  <td>Pul</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>Sys</td>
                  <td>Dia</td>
                  <td>Pul</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>Sys</td>
                  <td>Dia</td>
                  <td>Pul</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>Sys</td>
                  <td>Dia</td>
                  <td>Pul</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>Sys</td>
                  <td>Dia</td>
                  <td>Pul</td>
                  <td>Media</td>
                </tr>
              </tbody>
            </table>
        }
    </React.Fragment>
  )
}

export default IndexRecords;