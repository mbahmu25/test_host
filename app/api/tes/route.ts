// import {Layer} from "./layer_manager"
const Layer = {
    'id':1
  }
  
  export async function GET(){
    
    return Response.json(Layer)
  }
  export async function PUT(request: Request) {
    const data = await request.json()
    // const Layer = {"id":1,"1":1}
    // console.log(Layer)
    // Layer.push({"id":4})     
    Layer.id = 4
    return new Response(JSON.stringify(Layer),{
      headers:{
          'Content-Type': 'application/json',
          }
      }
    )
  }
  