import React, { useEffect, useState } from "react";
import "./ReadMore.scss";
import back from "../../componatnts/Assets/newswatch2webp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReadMore({}) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  function handleClick() {
    window.scrollTo(0, 0);
  }
  handleClick();

  useEffect(() => {
    axios(`http://localhost:3000/AllNews/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <div className="ReadMore">
      <img src={product.thumbnail} alt="" className="background_readmore" />
      <div className="Readmore_Story container">
        <p className="date_Read">{product.title}</p>
        <h1>Never Follow These Tips to Care for a Watch</h1>
        <p className="date_des">
          Vestibulum sem elit, eget in cum. Diam praesent lorem, fermentum omnis
          libero dignissim consectetuer luctus scelerisque, auctor massa diam in
          nullam.scelerisque, auctor massa diam in nullam.
        </p>
        <p className="date_des">
          Dignissim amet amet, eros quis felis. Ut faucibus dolor etiam,
          porttitor vel. Tortor in orci ligula, purus vehicula tellus nec mollis
          sed, suspendisse semper sed nec dignissimos aliquet, arcu in non ac
          tempus. Mi montes venenatis etiam, suspendisse sollicitudin quam est
          interdum justo in. Sed curabitur ultrices, ipsum vestibulum sem elit,
          eget in cum. Diam praesent lorem, fermentum omnis libero dignissim
          consectetuer luctus scelerisque, auctor massa diam in. Nullam
          cupidatat in montes, pulvinar sed, lorem elit adipiscing dui. Quis
          velit vulputate neque eget ut leo, amet aliquam nibh, duis ridiculus
          feugiat, laoreet lorem ultricies volutpat mauris in velit. Imperdiet
          augue eget imperdiet eros aut erat.
        </p>

        <div className="readmore-img row">
          <div className="col-md-6 readmore-img-left">
            <img src={product.thumbnai2} alt="" />
          </div>
          <div className="col-md-6 readmore-img-right">
            <p>
              Condimentum erat penatibus, vestibulum donec. Velit lorem incidunt
              nibh commodo, arcu pretium in fusce sodales neque. Ipsum nunc
              volutpat congue morbi mi, eget arcu, semper vivamus amet. Lectus
              praesent blandit donec interdum sit. Ante ut integer venenatis,
              vel auctor a. Leo ante vestibulum vestibulum, ut nibh porttitor
              duis wisi fermentum, quam ultricies odio vel. Neque magna accumsan
              a lacus, ultrices erat taciti parturient metus. Neque magna
              accumsan a lacus, ultrices erat taciti parturient metus. Neque
              magna accumsan a lacus, ultrices erat taciti parturient metus.
            </p>
          </div>
        </div>

        <p className="date_des">
          Proin luctus, enim egestas, laoreet nec duis turpis ornare ut, et
          quam. Justo massa, ut commodo ligula animi leo, vestibulum morbi eu
          massa platea, neque rutrum hendrerit pellentesque pellentesque
          venenatis felis. Amet ultrices at felis curabitur, eget massa, felis
          massa eget, etiam aliquam blandit dis wisi eget posuere. Rutrum urna
          feugiat odio consectetuer porta, placerat feugiat blandit enim vel,
          quis wisi. Nec morbi volutpat urna, fugiat magna leo, a nam aenean
          nemo nullam auctor sem, fermentum nunc lacus et dui justo est, sapien
          tortor urna auctor
        </p>

        <iframe width="100%" src={product.src} height="500" />

        <p className="date_des ifram-div">
          Proin luctus, enim egestas, laoreet nec duis turpis ornare ut, et
          quam. Justo massa, ut commodo ligula animi leo, vestibulum morbi eu
          massa platea, neque rutrum hendrerit pellentesque pellentesque
          venenatis felis. Amet ultrices at felis curabitur, eget massa, felis
          massa eget, etiam aliquam blandit dis wisi eget posuere. Rutrum urna
          feugiat odio consectetuer porta, placerat feugiat blandit enim vel,
          quis wisi. Nec morbi volutpat urna, fugiat magna leo, a nam aenean
          nemo nullam auctor sem, fermentum nunc lacus et dui justo est, sapien
          tortor urna auctor.
        </p>

        <div className="Social-icons">
          <div className="social-icons-item">
            {<FontAwesomeIcon icon={faFacebook} />}
            <p className="social-iconsDes">Share</p>
          </div>
          <div className="social-icons-item">
            {<FontAwesomeIcon icon={faTwitter} />}
            <p className="social-iconsDes">tweet</p>
          </div>
          <div className="social-icons-item">
            {<FontAwesomeIcon icon={faPinterest} />}
            <p className="social-iconsDes">pin it</p>
          </div>
        </div>
      </div>
    </div>
  );
}
