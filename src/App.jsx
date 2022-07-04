import Card from "./Card";
import "./App.css"
function App(){
	const sites = [
		{	
			foto: "https://i.pinimg.com/originals/da/f3/0f/daf30fac5e16393d66a3684dd27e29af.png",
			nome: "Netflix",
		},
		{	
			foto: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
			nome: "Github",
		},
		{	
			foto: "https://www.onlinesafetyuk.com/wp-content/uploads/2020/08/friv.png",
			nome: "Friv",
		},
		{	
			foto: "https://play-lh.googleusercontent.com/GBYSf20osBl2CRHbjGOyaOG5kQ3G4xbRau-dzScU9ozuXQJtnUZPkR3IqEDOo5OiVgU",
			nome: "Meet",
		},
		{	
			foto: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
			nome: "Youtube",
		},
		{	
			foto: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/e7dqcpwvtzsjqc9kb7oi",
			nome: "Click Jogos",
		},
		{	
			foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png",
			nome: "Facebook",
		},
		{	
			foto: "https://e7.pngegg.com/pngimages/556/55/png-clipart-spotify-android-music-mobile-phones-computer-icons-android-logo-grass-thumbnail.png",
			nome: "Spotify",
		},
		{	
			foto: "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone.png",
			nome: "WhatsApp Web",
		},
		{
			foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
			nome: "Instagram",
		},
	];

	return(
		<div className="conteiner">
			{
				sites.map((site) => {
					return <Card 
							foto={site.foto}
							nome={site.nome}
						/>;
				})
			}
		</div>
	);
}

export default App;