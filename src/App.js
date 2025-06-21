import people from './data';
import './App.css';
import Review from './review';



function App() {
  return (
    
    <main >
     <section className='total'>
      <div >
      
        <h2 className='review'>Our Reviews</h2>
       
        </div>
        <div className='underline'></div>
        <div className='main-review'>
         <Review/>
          </div>
           </section> 
    </main>
   
  );

}

export default App;
