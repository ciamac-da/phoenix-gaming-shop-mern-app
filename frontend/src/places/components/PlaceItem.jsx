import React, {useState}  from "react";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import muiStyle from "./PlaceItemStyle";
import Button from '../../shared/components/UIElements/Button';

const PlaceItem = (props) => {
  const classes = muiStyle();
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true)

  const closeMapHandler = () => setShowMap(false)
   

  return (
    <React.Fragment>
    <Modal 
    show={showMap} 
    onCancel={closeMapHandler}
    header={props.address}
    contentClass={classes.placeItem__content}
    footerClass={classes.placeItem__actions}
    footer={<Button onclick={closeMapHandler}>CLOSE</Button>} >
      <div className={classes.mapContainer}></div>
    </Modal>
    <li className={classes.placeItem}>
      <Card className={classes.placeItem__content}>
        <div className={classes.placeItem__image}>
          <img
            className={classes.placeItem__image__img}
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.placeItem__info}>
          <h2 className={classes.placeItem__info__sub}>{props.title}</h2>
          <h3 className={classes.placeItem__info__sub}>{props.address}</h3>
          <p className={classes.placeItem__info__sub}>{props.description}</p>
        </div>
        <div className={classes.placeItem__actions}>
          <Button inverse onclick={openMapHandler}> VIEW ON MAP </Button>
          <Button to={`/places/${props.id}`}> EDIT </Button>
          <Button danger> DELETE</Button>
        </div>
      </Card>
    </li>
    </React.Fragment>
  );
};

export default PlaceItem;
