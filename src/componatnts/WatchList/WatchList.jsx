import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../Card/Card.scss";
import Modal from "react-bootstrap/Modal";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./WatchList.scss";
import axios from "axios";
import Card from "../Card/Card";
import { $watchListAtom } from "../Store/WatchListAtom";
import { useRecoilState } from "recoil";
import { $user } from "../Store/Login";
import { Link, useNavigate } from "react-router-dom";

export default function WatchList() {
  const navigate = useNavigate();
  const [watchList, setWatchList] = useRecoilState($watchListAtom);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [user] = useRecoilState($user);

  useEffect(() => {
    if (!user.isAuth) return navigate(`/Create`);
    axios(`http://localhost:3000/users/${user.user.id}`).then((data) => {
      setWatchList(data.data.WatchList);
    });
  }, [user]);

  return (
    <>
      <div className="items-dropdown" onClick={handleShow}>
        <FontAwesomeIcon icon={faHeart} className="items-dropdown-icon" />
        <a className="items-descr">WISHLIST</a>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>MY WISHLIST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {watchList && watchList.length > 0 ? (
              <div className="carditems watchlist-Card col-md-6 col-sm-12">
                {watchList.map((product, index) => {
                  return (
                    <Card
                      product={product}
                      key={product.id}
                      handle={handleClose}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="WathcList-Empty">
                <h1>YOOR WISHLIST</h1>
                <p>Your watshlidt is currently empty.</p>
                <Link to={`/AllCOLLECTION`} onClick={() => handleClose()}>
                  <button>CONTINUE SHOPPING</button>
                </Link>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
