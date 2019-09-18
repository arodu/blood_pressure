import React, { useState, useEffect } from 'react'

import {createMeasureAction} from '../actions/measuresActions'
import {useDispatch} from 'react-redux'


const NewMeasure = () => {

  const [name, setName] = useState('')
  const [sys, setSys] = useState('')
  const [dia, setDia] = useState('')
  const [pul, setPul] = useState('')
  const [media, setmedia] = useState('')

  const distpach = useDispatch();
  const addMeasure = (measure) => distpach( createMeasureAction(measure) )

  useEffect(() => {
    if(sys !== '' && dia !== ''){
      let media = Math.round( ((2/3)*dia) + ((1/3)*sys) )
      setmedia(media)
    }else{
      setmedia('')
    }
  }, [dia, sys]);

  const submitNewMeasure = (e) => {
    e.preventDefault()


    // validation
    if( name.trim() === '' || sys.trim() === '' || dia.trim() === '' || pul.trim() === ''){
        console.log("Error de validacion")
        return
      }

    addMeasure({
      name: name,
      sys: parseInt(sys),
      dia: parseInt(dia),
      pul: parseInt(pul),
      media: parseInt(media)
    })

  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card rounded-0">
                  <div className="card-body">
                      <h2 className="text-center mb-4 font-weight-bold ">Nueva Medida</h2>
                      <form onSubmit={submitNewMeasure}>

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

export default NewMeasure;