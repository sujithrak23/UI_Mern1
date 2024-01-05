import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function HeaderAndFooterExample() {
  return (
    <>
    <div
    style={{
      backgroundColor: "#1a1a1a", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <hr style={{color:'white'}}/>
    <div className='container'>
        <h1 style={{textAlign:'left',color:'white'}}>2024 OFFERS ON OUR FAVOURITE FOODS !!</h1>

 

    <div className='offer'>

    <Card className="text-center" style={{backgroundColor:'lightblue',margin:'60px', width:'550px',height:'280px',display:'flex'}}>
      <Card.Body>
        <Card.Title style={{color:'brown',fontSize:'40px'}}>New Year Mega Offer</Card.Title>
        <Card.Text style={{color:'blue',fontSize:'25px'}}>
          Get Free Upto 60% Off
        </Card.Text>
        <Link to='/Navbar'>
        <Button variant="warning" style={{color:'black',fontSize:'40px'}}>View Details</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">Valid till December 31st</Card.Footer>
    </Card>

<Card className="text-center" style={{backgroundColor:'lavendar',margin:'60px', width:'550px',height:'280px',display:'flex'}}>
<Card.Body>
  <Card.Title style={{color:'brown',fontSize:'40px'}}>New Year Combo Offer</Card.Title>
  <Card.Text style={{color:'blue',fontSize:'25px'}}>
    Buy 2 And Get 1 Free
  </Card.Text>
  <Link to='/Navbar'>
  <Button variant="warning" style={{color:'black',fontSize:'40px'}}>View Details</Button>
  </Link>
</Card.Body>
<Card.Footer className="text-muted">Valid till January 31st</Card.Footer>
</Card>
</div>

</div>
</div>
<hr style={{color:'white'}}/>
</>


  );
}

export default HeaderAndFooterExample;