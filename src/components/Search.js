import React, {useState} from 'react'

const Search = () => {

  const [name, setName] = useState('')

  return (
    <React.Fragment>
      <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card rounded-0">
                  <div className="card-body">
                      <form>
                          <h2 className="text-center mb-4 font-weight-bold ">Buscar</h2>
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

                      </form>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Search;