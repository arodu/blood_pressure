import React, { useState, useEffect } from 'react'

import {createRecordAction} from '../actions/recordsActions'
import {useDispatch, useSelector} from 'react-redux'
import {initValidation, validationSuccess, validationFailed} from '../actions/validationAction'

const NewRecord = ({match, history}) => {

  const [name, setName] = useState( match.params.name )
  const [sys, setSys] = useState('')
  const [dia, setDia] = useState('')
  const [pul, setPul] = useState('')
  const [media, setmedia] = useState('')

  const distpach = useDispatch();
  const addRecord = (record) => distpach( createRecordAction(record) )

  const error = useSelector((state) => state.error.error)

  useEffect(() => {
    if(sys !== '' && dia !== ''){
      let media = Math.round( ((2/3)*dia) + ((1/3)*sys) )
      setmedia(media)
    }else{
      setmedia('')
    }
  }, [dia, sys]);

  const submitNewRecord = (e) => {
    e.preventDefault()

    distpach( initValidation() )
    // validation
    if( name.trim() === '' || sys.trim() === '' || dia.trim() === '' || pul.trim() === ''){
      distpach( validationFailed() )
      return
    }

    distpach( validationSuccess() )

    let d = new Date()
    addRecord({
      name: name,
      sys: parseInt(sys),
      dia: parseInt(dia),
      pul: parseInt(pul),
      media: parseInt(media),
      date: d.toISOString()
    })

    history.push('/')

  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card rounded-0">
                  <div className="card-body">
                      <h2 className="text-center mb-4 font-weight-bold ">Nueva Medida</h2>

                      {
                        error
                        ? <div className="alert alert-danger rounded-0">Ha ocurrido un error validando los datos</div>
                        : null
                      }

                      <form onSubmit={submitNewRecord}>

                          <div className="form-group">
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-user-alt fa-fw"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nombre"
                                  required={true}
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                                />
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-chevron-up fa-fw"></i>
                                  </span>
                                </div>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Sistólica"
                                  required={true}
                                  value={sys}
                                  min={0}
                                  onChange={e => setSys(e.target.value)}
                                />
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-chevron-down fa-fw"></i>
                                  </span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Diastólica"
                                    required={true}
                                    value={dia}
                                    min={0}
                                    onChange={e => setDia(e.target.value)}
                                />
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fas fa-heartbeat fa-fw"></i>
                                  </span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Pulsaciones"
                                    value={pul}
                                    min={0}
                                    onChange={e => setPul(e.target.value)}
                                />
                              </div>
                          </div>

                          <button type="submit" className="btn btn-success btn-block rounded-0 font-weight-bold text-uppercase">
                            Guardar
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </div>

      <div className="row justify-content-center mt-3">
          <div className="col-md-8">
              <div className="card rounded-0">
                  <div className="card-body">

                      <div className="form-group">
                        <label htmlFor="media">Presión Arterial Media</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-chevron-right fa-fw"></i>
                            </span>
                          </div>
                          <input
                              id="media"
                              type="number"
                              className="form-control-plaintext"
                              placeholder="Media"
                              value={media}
                              readOnly={true}
                          />
                        </div>
                      </div>

                </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default NewRecord;