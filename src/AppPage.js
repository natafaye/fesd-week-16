import React from 'react'
import { useParams } from 'react-router-dom';

export default function AppPage({ appList }) {
  let { appId } = useParams();
  appId = parseInt(appId);

  const app = appList.find(a => a.id === appId)

  return (
    <div>
      <h2>{ app.name }</h2>
    </div>
  )
}
