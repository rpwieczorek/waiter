import { useState,useEffect } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTableDataById, updateTableRequest } from "../../../redux/tablesRedux";
import { useNavigate } from "react-router-dom";

const TableForm = props => {
  let table = {
    id: -1,
    status: 'Free',
    peopleAmount: -1,
    maxPeopleAmount: -1,
    bill: -1,
  };
  
  table = useSelector(state => getTableDataById(state,parseInt(props.tableId))) || table;

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(table.id === -1){
       navigate('/', { replace: true });
     }
  },[table.id]);

  const handleStatusChange = value => {
    setStatus(value);
    if (value === 'Cleaning') {
      setPeopleAmount(0);
    }
    else if (value === 'Free') {
      setPeopleAmount(0);
    }
  };

  const handlePeopleAmount = value => {
    if (value <= maxPeopleAmount && value >= 0 && value <= 10){
      setPeopleAmount(value);
    }  
  };

  const handleMaxPeopleAmount = value => {
    if (value >= 0 && value <= 10){
      setMaxPeopleAmount(value);
    }
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(value);
    }
  };

  const handleUpdate = e => {
    e.preventDefault();
    table = {
      id: table.id,
      status: status,
      peopleAmount: peopleAmount,
      maxPeopleAmount: maxPeopleAmount,
      bill: bill,
    };
    // console.log(table);
    dispatch(updateTableRequest(table));
    navigate('/', { replace: true });
};
  return (
    <Form onSubmit={handleUpdate}>
      <Form.Group as={Row} className="mb-3" controlId="status">
        <Form.Label column sm={2}>
          Status
        </Form.Label>
        <Col sm={2}>
          <Form.Select value={status} onChange={(e) => handleStatusChange(e.target.value)}>
            <option>Reserved</option>
            <option>Busy</option>
            <option>Free</option>
            <option>Cleaning</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="people">
        <Form.Label column sm={2}>
          People
        </Form.Label>
        <Col sm={2} className="d-flex flex-row align-items-center">
          <Form.Control value={peopleAmount} style={{width: '60px'}} onChange={(e) => handlePeopleAmount(e.target.value)}>
          </Form.Control>
          <span className="p-2">/</span>
          <Form.Control  value={maxPeopleAmount} style={{width: '60px'}} onChange={(e) => handleMaxPeopleAmount(e.target.value)}>
          </Form.Control>
        </Col>
      </Form.Group>

      {status === 'Busy' && (
        <Form.Group as={Row} className="mb-3" controlId="bill">
          <Form.Label column sm={2}>
            Bill
          </Form.Label>
          <Col sm={2} >
            <Form.Control defaultValue={bill} style={{width: '60px'}} onChange={(e) => setBill(e.target.value)}>
            </Form.Control>
          </Col>
        </Form.Group>)
      }
      
      <Button variant="primary" type="submit">
        Update
      </Button>

    </Form>
  );
};

export default TableForm;
