const collection = [
    {
      id: 299663524034,
      title: 'Domótica Inteligente',
      handle: 'domotica-inteligente'
    },
    {
      id: 299663392962,
      title: 'energía renovable',
      handle: 'energia-renovable'
    },
    {
      id: 299663294658,
      title: 'Ropa y wereables',
      handle: 'ropa-y-wereables'
    },
    {
      id: 299663327426,
      title: 'Salud y bienestar Tecnológico',
      handle: 'salud-y-bienestar-tecnologico'
    },
    { id: 299663556802, 
      title: 'Tecnología RV', 
      handle: 'tecnologia-rv' 
    },
    { id: 299663360194,
     title: 'Vehículos',
      handle: 'vehiculos' 
    }
  ]
export async function GET() {
    return Response.json({collection })
}