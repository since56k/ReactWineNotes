import React, {Component} from 'react'
//var {Link} = require('react-router');
import LocalStorage from 'LocalStorage'
import Fields from 'Fields'



class WineFields extends Component {

		constructor(props) {    /* Note, is possible passed pros into the constructor in order to be used constructor(props)super(props)*/ 
        super(props)
    }

	PropTypes: {
				id: React.PropTypes.number.isRequired
			}

	render () {

		var {params} = this.props;
		console.log(params);
		//bind id
		function renderForm() {

			if(params.id){
			//es6 substring()
			if(params.id.startsWith("-")){
				var fireWine = LocalStorage.getFireWines();
				var values = fireWine.filter(function (el){
        		if(el.id == params.id){
        			return true
        		} else {
        			return false 
        			console.log('error in bind name')
        		}

    		});

				//string.replace( /\[\d+\]/g, '[newvalue]');

				var wineInfo = {
				    // 'wineName': values[0].Appellation.Name,
				    'wineName': values[0].name.replace(/\./g,''),
				    'wineRegion': values[0].region,
				    'wineYear': values[0].year,
				    'wineRaiting': values[0].rating,
				    'wineVarietal': values[0].varietal,
				    'wineType': values[0].type,
				    'wineVineyard': values[0].vineyard
				};

				return (

	    			<Fields 

		    			wineName={wineInfo.wineName}
		    			wineRegion={wineInfo.wineRegion}
		    			wineYear={wineInfo.wineYear}
		    			wineRaiting={wineInfo.wineRaiting}	
		    			wineVarietal={wineInfo.wineVarietal}				
		    			wineType={wineInfo.wineType}				
		    			wineVineyard={wineInfo.wineVineyard}				

	    			/>

	    		)

			} //end if

			else {
				console.log(params.id);
			var wine = LocalStorage.getWines();
			console.log(wine);
			var values = wine.filter(function (el){
        		if(el.Id == params.id){
					console.log(el.Id);
        			console.log(params.id)
        			return true

        		} else {
        			return false 
        			console.log('error in bind name')
        		}

    		});

    		var wineInfo = {
				    // 'wineName': values[0].Appellation.Name,
				    'wineName': values[0].Name.replace(/\./g,''),
				    'wineRegion': values[0].Appellation.Region.Name,
				    'wineYear': values[0].Vintage,
				    'wineRaiting': values[0].Ratings.HighestScore,
				    'wineVarietal': values[0].Varietal.Name,
				    'wineType': values[0].Varietal.WineType.Name,
				    'wineVineyard': values[0].Vineyard.Name
				};

	    		return (

	    			<Fields 

		    			wineName={wineInfo.wineName}
		    			wineRegion={wineInfo.wineRegion}
		    			wineYear={wineInfo.wineYear}
		    			wineRaiting={wineInfo.wineRaiting}	
		    			wineVarietal={wineInfo.wineVarietal}				
		    			wineType={wineInfo.wineType}				
		    			wineVineyard={wineInfo.wineVineyard}				

	    			/>

	    		)

    		} 

    	}  else {return (<Fields/>)}

	} 
		

		return (
		<div>
			<h1 className="text-center subheader">
				WineFields				
			</h1>					
			
			{renderForm()}	
		
		</div>
		);	
	}
};




export default WineFields;














/*
Info wine Array

values = [
	wineName,
	year,
	region: south america, cile,
	raiting: 90,
	varetial: Cabernet Souvignon,
	wineType: redwine,
	vineyard:

]


//<strong className="text-center">{params.id}</strong>

// 	WineFields.propTypes = {
// 	  id: React.PropTypes.string,

// }


// WineFields.defaultProps = {
//     values: ''
// };


*/



// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

