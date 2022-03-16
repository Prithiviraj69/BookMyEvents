import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Event({ event }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={event.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <b>
          <h1>{event.name}</h1>
          <p>{event.address}</p>
          <p>{event.eventType}</p>
          <p>{event.price}</p>
        </b>

        <div style={{ float: "right" }}>
          <Link to={`/book/${event._id}`}>
            <button type="button" className="btn btn-primary m-2">
              Book Now
            </button>
          </Link>
          <button className="btn btn-primary" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{event.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {event.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{event.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Event;
