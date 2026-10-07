/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Luis",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere planificar sus entrenamientos de gimnasio",
                touch1: "Movil",
                feel1: "4",
                con1: "buscar informacion y aprender como hacerlo",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Pregunta a la IA como planificarlos",
                touch2: "Movil",
                feel2: "2",
                con2: "la informacion que le da es demasiado generica y no se adapta a lo que necesita",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar en internet paginas web que tengan ejercicios que poder hacer",
                touch3: "Movil",
                feel3: "2",
                con3: "Hay demasiados resultados y es dificil encontrar la que cumpla con sus expectativas",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su GymBro le recomienda la pagina web que el usa",
                touch4: "Gym",
                feel4: "5",
                con4: "No conoce aun la pagina y no sabe si le gustara",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Ve varias paginas y apps que recomiendan entrenamientos de gimnasio",
                touch5: "Movil (whatsapp)",
                feel5: "2",
                con5: "Pregunta a sus GymBros cual les parece mejor",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Prueba una app y realiza varias sesiones de entrenamiento con ella",
                touch6: "Gym",
                feel6: "2",
                con6: "Va a perder un dia de gimnasio solo para probar la app y no sabe si sera eficaz",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Maria",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Se levanta una mañana y ve que le ha salido tripa que no recordaba tener",
                touch1: "Espejo y bascula",
                feel1: "2",
                con1: "Quiere bajar de peso y estar en su linea",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Habla con sus amigas sobre su aumento de peso le recomiendan buscar un entrenador o usar una app para bajar de peso",
                touch2: "Movil(Whatsapp)",
                feel2: "3",
                con2: "Pero no le gusta mucho hacer deporte",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide contactar con un entrenador personal",
                touch3: "Movil (llamada)",
                feel3: "2",
                con3: "Es demasiado caro",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ve un anuncio en youtube de aplicaciones de entrenamiento que prometen entrenamientos para bajar de peso",
                touch4: "Movil",
                feel4: "2",
                con4: "No consigue ver de forma clara como funciona la app sin meter la tarjeta de credito primero",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Prueba una app gratuita que encuentra internet",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Son siempre los mismo ejercicios y no estan bien adaptados a su estado fisico",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente comienza a entrenar en casa 2 dias en semana",
                touch6: "Movil(app)",
                feel6: "3",
                con6: "Valora buscar un nutricionista para perder peso mas rapido",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



