/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Luis",
				Photo: "man.png",
				Quote: "Vive la vida al máximo",
				Age: 20,
				Occupation: "Estudiante de Universidad",
				Family: "Soltero",
				Location: "Granada (Huetor Vega)",
				Character: "Le gusta practicar deporte y la naturaleza",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere objetivos realistas para sus entrenamientos", "No sabe como comenzar su rutina", "No tiene tiempo para planificar sus entrenamientos", "Quiere adaptar sus rutinas a su tiempo disponible"],
				Frustrations: ["Odia perder 5 minutos configurando sus apps que luego no ten dejan probarlas sin pagar", "No le gusta que las apps le obliguen a registrarse para probarlas", "No le gusta que las apps le obliguen a pagar para poder probarlas", "No le gusta que las apps no tengan un plan de entrenamiento adaptado a su tiempo disponible"],
				Bio: "Luis es un estudiante de universidad nacido en Granada que disfruta de la naturaleza y haciendo rutinas en el gym con sus amigos que fueron los que le animaron a hacer deporte cuando empezo la uiversidad hace 2 años.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "Quiere objetivos realistas para sus entrenamientos" ,  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Maria",
				Photo: "woman.png",
				Quote: "Viva el chill",
				Age: 25,
				Occupation: "Buscandose a si misma en el espejo.",
				Family: "Soltera.",
				Location: "Toledo (España)",
				Character: "Valiente y extrovertida.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				], 
				Goals: ["Disfrutar al maximo.", "Tener un buen fisico que lucir con sus amigas.", "No malgastar tiempo que puede estar disfrutando."],
				Frustrations: ["No lograr lo que quiere.", "No ser el centro de atencion.", "La tripita que se le queda cuando come de mas."],
				Bio: "Es una joven apasionada por el mundo de la belleza y las tendencias de moda, le encanta cuidarse por fuera. Es muy social que le gusta salir a cenar, ir a restaurantes con sus amigos y disfrutar de la comida los fines de semana.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Poder disfutar de la comida los fin de semanas sin preocuparse de la trimpita de despues." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])