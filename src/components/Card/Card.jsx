import { Link, NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";




function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
   
   const [isFav, setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className="card">
         <div className="card-container">
            <button className="card-button" onClick={() => onClose(id)}>X</button>
               <div className="card-img">
                  <img src={image} alt='' />
               </div>
            <NavLink to={`/detail/${id}`} >
               <h2 className="card-name">{name}</h2>
            </NavLink>
            <div className="card-info"> 
               <h2>{gender}</h2>
               <h2>{species}</h2>
            </div>
         </div>

         <button onClick={handleFavorite}> {isFav ? '❤️':'🤍'} </button>
         
      </div>
   );
}

   const mapStateToProps = (state) => {
      return {
         myFavorites: state.myFavorites
      }
   }

   const mapDispatchToProps = (dispatch) => {
      return {
         addFav: (chararacter) => { dispatch(addFav(chararacter)) },   //termina despachando lo que retorna al ejecutarse con ()
         removeFav: (id) => { dispatch(removeFav(id)) }
      } 
   }


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)