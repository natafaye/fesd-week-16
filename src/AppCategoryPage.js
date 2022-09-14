import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from './FAKE_DATA';

export default function AppCategoryPage({ appList }) {
    let { categoryId } = useParams();
    categoryId = parseInt(categoryId);

    const category = CATEGORIES.find(c => c.id === categoryId)
    const appsInCategory = appList.filter(app => app.categoryId === categoryId)

    return (
        <div>
            <h2 className="my-3">{ category.name }</h2>
            {appsInCategory.map(app => (
                <div className="card" key={app.id}>
                    <div className="card-body">
                        <h4 className="card-title"><Link to={"/apps/" + app.id}>{app.name}</Link></h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
