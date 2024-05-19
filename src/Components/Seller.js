import React from 'react'
import NavbarComp from './NavbarComp'
import axios from 'axios'
import { MDBDataTable } from 'mdbreact';
import { Navigate, useNavigate } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";


const AvailableProperties = () => {

    const [properties,setProperties] = React.useState([])
    const [tabledata, setTabledata] = React.useState({
      columns: [
        {
          label: 'Owner',
          field: 'owner',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Place',
          field: 'place',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Area',
          field: 'area',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Number of Bedrooms',
          field: 'nob',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Bathrooms',
          field: 'bathroom',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Hospitals Nearby',
          field: 'hospitals',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Colleges Nearby',
          field: 'colleges',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Price',
          field: 'money',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Property Name',
          field: 'name',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Edit',
          field: 'edit',
          sort: 'asc',
          width: 200
        },
        {
            label: 'Delete',
            field: 'delete',
            sort: 'asc',
            width: 200
          },
      ],
      rows: []
    });
    
    const navigate = useNavigate()

    const deleteData = (id) => {
        axios.post('/delete',{id: id})
        .then(res =>{
            if(res.data === 'deleted'){
                let newProperties = properties.filter(property => property._id !== id)
                setProperties(newProperties)
                let rows = []
                newProperties.map((property,index) => {
                    rows.push({
                        owner: property.owner,
                        place: property.place,
                        area: property.area,
                        nob: property.nob,
                        bathroom: property.bathroom,
                        hospitals: property.hospitals,
                        colleges: property.colleges,
                        money: property.money,
                        name: property.name,
                        edit:<button className='bg-blue-500 p-2 text-white rounded-sm' onClick={() => navigate('/edit/'+property._id)}>Edit</button>,
                        delete:<MdOutlineDeleteOutline onClick={() => deleteData(property._id)}/>
                    })
                })
                setTabledata({...tabledata,rows: rows})
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
    

    React.useEffect(() =>{
        axios.post('http://localhost:8000/properties',{owner: 'alice@gmail.com'})
        .then(res =>{
            setProperties(res.data)
            let rows = []
            res.data.map((property,index) =>{
              rows.push({
                owner: property.owner,
                place: property.place,
                area: property.area,
                nob: property.nob,
                bathroom: property.bathroom,
                hospitals: property.hospitals,
                colleges: property.colleges,
                money: property.money,
                name: property.name,
                edit:<button className='bg-blue-500 p-2 text-white rounded-sm' onClick={() => navigate('/property/'+property._id)}>Edit</button>,
                delete:<MdOutlineDeleteOutline className='text-2xl' onClick={() => deleteData(property._id)}/>
              })
            })
            setTabledata({...tabledata,rows: rows})
        })
    },[])

  return (
    <div className='min-h-screen flex flex-col bg-slate-100'>
        <NavbarComp />
        <div className='h-full flex flex-col w-full '>
        <div className='w-full py-16 flex justify-between px-48'>
          <p className='text-3xl'>Create a New Property by clicking on the button. ---------{`>`} </p>
          <button className='bg-blue-500 p-2 px-5 font-semibold uppercase text-white rounded-sm' onClick={() => navigate('/create')}>Create</button>
        </div>
          <Table data={tabledata} />
        </div>
    </div>
  )
}

export default AvailableProperties


const Table = ({data}) => {
  return (
      <div className='md:p-12 p-3 gap-x-20 gap-y-10  flex flex-wrap justify-center'>
          <div className='md:w-[97%] font-semibold'>
              <MDBDataTable
                  hover
                  striped
                  entriesOptions={[10, 25, 50, 100]}
                  entries={25}
                  bordered

                  className='cursor-pointer text-black uppercase font-semibold'
                  paging={true}
                  data={data}
              ></MDBDataTable>
          </div>
      </div>
  )

}