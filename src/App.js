
import './App.css';
import Profile from './profile/Profile';
import img from './profile/insafphoto.png'

function App() {
  const fullname="Insaf Daly"
    const bio="I am a future web developer"
    const profession="I will create a very nice website"

    const handleName = () => {
      alert (`The fullname is ${fullname}`)
}

return (
<div className='App'>

  <Profile fullname={fullname} bio={bio} profession={profession} handleName={handleName}>
  <img style={{width:200,height:200, top:22, left:20}} src={img} alt='Mypic'/>
 
    </Profile>
    
</div>
);
}

export default App;

