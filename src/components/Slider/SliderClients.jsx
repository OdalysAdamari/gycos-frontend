
export const SliderClients = () => {
  
    const clients = [
        {
            id: 1,
            img: "http://gycos.juanpabloguleal.com/uploads/teksid.png"
        },
        {
            id: 2,
            img: "http://gycos.juanpabloguleal.com/uploads/psw.png"
        },
        {
            id: 3,
            img: "http://gycos.juanpabloguleal.com/uploads/cat.png"
        },
        {
            id: 4,
            img: "http://gycos.juanpabloguleal.com/uploads/reis.png"
        },
        {
            id: 5,
            img:"http://gycos.juanpabloguleal.com/uploads/denso.png"
        }        
    ]

    

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex h-[50%] items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
              {clients.map(client => (
                <li key={client.id}>
                  <img src={client.img} className="p-4" />
                </li>
              ))}
            </ul>
            <ul className="flex h-[50%] items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
              {clients.map(client => (
                <li key={client.id}>
                  <img src={client.img} className="p-4" />
                </li>
              ))}
            </ul>
          </div>
  )
}

