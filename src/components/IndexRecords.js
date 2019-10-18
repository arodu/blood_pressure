import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addName, loadRecordsAction} from '../actions/recordsActions'

const IndexRecords = ({match}) => {

  let state_name = useSelector((state) => state.records.name)
  let loading = useSelector((state) => state.records.loading)
  let records = useSelector((state) => state.records.records)

  let name = match.params.name
  const distpach = useDispatch();

  if(name === undefined){
    if(state_name!==''){
      name = state_name
    }
  }

  useEffect( () => {
    distpach( addName(name) )
    distpach( loadRecordsAction(name) )
  }, [name, distpach])


  return (
    <React.Fragment>
        <h2 className="text-center">Registros <strong>{name}</strong></h2>
        {
          loading
          ? <div className="alert alert-primary">
              <div className="fas fa-spinner fa-pulse"></div> Cargando Registros
            </div>
          :
            ( name === undefined
              ? <div className="alert alert-warning rounded-0">
                  <i className="fas fa-triangle-info fa-fw"></i>
                  No hay registros para mostrar
                </div>
              : <table className="table table-striped table-hover">
                  <thead className="bg-success table-dark">
                    <tr>
                      <th scope="col" className="text-center">Fecha</th>
                      <th scope="col" className="text-center">Sistólica</th>
                      <th scope="col" className="text-center">Diastólica</th>
                      <th scope="col" className="text-center">Pulso</th>
                      <th scope="col" className="text-center">Media</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      records.map(function(item){
                        let d = new Date(item.date)
                        return (
                          <tr key={ item.id }>
                            <td>{ d.toDateString() }</td>
                            <td className="text-center">{ item.sys }</td>
                            <td className="text-center">{ item.dia }</td>
                            <td className="text-center">{ item.pul }</td>
                            <td className="text-center">{ item.media }</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            )
        }
    </React.Fragment>
  )
}

export default IndexRecords;