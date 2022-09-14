import React from 'react'
import { Link } from 'react-router-dom'

export default function AllAppsPage({ appList }) {
  return (
    <div>
        { appList.map(app => (
            <div className="card" key={app.id}>
                <div className="card-body">
                    <h4 className="card-title"><Link to={"/apps/" + app.id}>{ app.name }</Link></h4>
                </div>
            </div>
        ))}
    </div>
  )
}
