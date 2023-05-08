import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useProductsContext } from "../../context/Products";
import { Container, Log, Product, Search, Section, SectionH2, Select, Wrapper } from "./styled";

const Foods = () => {
  const [state, dispatch] = useProductsContext();
  const navigate = useNavigate()

  return (
    <Container>
      <Section>
        <Log>
          <SectionH2>All Foods</SectionH2>
        </Log>
      </Section>
      <Wrapper >
        <Row>
          <Col lg="6" md="6" className="mb-4">
            <Search >
              <input className="search"
                type="text"
                placeholder="search"
                onChange={(e) =>
                  dispatch({
                    type: "SEARCH",
                    payload: { value: e.target.value },
                  })
                }
              />
            </Search>
          </Col>
          <Col lg="6" md="6" className="mb-4 text-end">
            <Select className="filter"
              onChange={(e) =>
                dispatch({ type: "FILTER", payload: { value: e.target.value } })
              }
            >
              <option value="default">Default</option>
              <option value="high">High price</option>
              <option value="low">Low price</option>
            </Select>
          </Col>
        </Row>
        <Row>
          {state.data.map((value) => (
            <Col key={value.id} lg="3" md="4"  sm='6' xs='6' className="mb-4">
              <Product className="product ">
                <div className="product_img">
                  <img src={value.image01} alt="img" className="w-50" />
                </div>
                <div className="product_title">
                  <h5>
                    <p
                      onClick={() => {navigate(`/foods/:${value.id}`) ; dispatch({
                        type: "Add_To_Review",
                        payload: { product: value },
                      }) }
                        
                      }
                      
                    >
                      {value.title}
                    </p>
                  </h5>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="price">${value.price}</span>
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch({
                        type: "Add_To_Card",
                        payload: { product: value, id: value.id },
                      })
                    }
                  >
                    {" "}
                    Add to Card
                  </button>
                </div>
              </Product>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Foods;
