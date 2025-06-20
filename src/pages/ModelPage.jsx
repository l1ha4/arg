import React from 'react'
import IconModel from '../components/ComponentsPage/ModelPage/IconModel/IconModel'
import '../styles/stylePage/ProductPage.css'
import InfoModel from '../components/ComponentsPage/ModelPage/InfoModel/InfoModel'
import DetailsModel from '../components/ComponentsPage/ModelPage/DetailsModel/DetailsModel'
import DescriptionModel from '../components/ComponentsPage/ModelPage/DescriptionModel/DescriptionModel'
import carMain from '../assets/img/image6.png'
import car1 from '../assets/img/image1.png'

function ModelPage() {
  const imgs = {
    main: carMain,
    arr: [car1, carMain, car1, car1, car1, car1],
  }

  const dataModel = {
    nameModel: 'Porsche 911 GT3 RS 992',
    license: 'Standard Use License (No Commercial)',
    price: '$104.30',
    oldPrice: '$149.00',
    discount: '-%30',
    like: false,
    formats: ['fbx', 'c4d', 'obj'],
    tags: [
      '3D Modeling',
      'Lighting',
      'Low-poly Modeling',
      'Rendering',
      'Rigging',
      'Texturing',
      'UV mapping',
    ],
    developer: { name: 'l1ha4', reviews: '(600 reviews)', img: '' },
    details: {
      LowPoly: 'Yes',
      Polygons: '880,000',
      Vertices: '880,000',
      Textures: 'Yes',
      Materials: 'Yes',
      UVMapping: 'No',
      PublishDate: '30.09.2022',
      ModelId: '5728932',
      details: {
        ol: [
          'detailed exterior and interior',
          'doors can be opened,',
          "every object has material's name, you can easily change or apply materials,",
        ],
        text: `Polycount: without meshsmooth max,obj,lwo,xsi,c4d: 880 000 polygons
collapsed fbx,3ds,obj: 9 200 000 faces/ 5 400 000 polygons`,
      },
    },
  }

  return (
    <div className="page">
      <div className="block__product">
        <div>
          <IconModel imgs={imgs} />
          <DescriptionModel model={dataModel}/>
        </div>

        <div>
          <InfoModel  model={dataModel}/>
          <DetailsModel  model={dataModel}/>
        </div>
      </div>
    </div>
  )
}

export default ModelPage
