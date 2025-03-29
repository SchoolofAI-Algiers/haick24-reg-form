import FormPage from "./pages/FormPage.jsx";
import Grid from "./assets/Grid.png";
import curve1 from "./assets/Curve4.svg";
import curve2 from "./assets/Curve2.svg";
import curve3 from "./assets/Curve1.svg";
import curve4 from "./assets/Curve3.svg";
import logoinverse from "./assets/logoinverse.png";
import Header from "./components/Header";

function App() {
  return (
    <div className="container px-4 flex flex-col items-center max-h-screen h-fit overflow-hidden">
      <img
        src={Grid}
        className="w-full object-cover max-h-[calc(100vh)] absolute bottom-0 z-0"
      />
      <img src={curve1} className="h-screen absolute -left-20  pt-[120px]" />
      <img
        src={curve2}
        className="absolute right-0 top-32 xl:top-16 pt-[120px]"
      />
      <img
        src={curve3}
        className="absolute bottom-0 translate-x-[20%] translate-y-[0%] -z-10"
      />
      <img src={curve4} className="absolute left-0 -bottom-0 z-10" />
      <div className="h-56 w-56 bg-primary absolute top-20 blur-[200px] rounded-full -z-40" />
      <div className="h-56 w-56 bg-primary absolute bottom-20 right-9 blur-[100px] rounded-full -z-40" />
      <img src={logoinverse} className="absolute left-[80px] bottom-[10px]" />

      <div>
        <Header />
        <FormPage />

        {/*<div className='flex flex-col items-center max-w-xl mx-auto shadow-lg rounded-md absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]'>
              <h1 className='font-bold text-white text-center'>Registration are <br/>
              <span className=' text-primary'>Closed</span></h1>
              <div className='px-4 py-2 rounded-lg bg-slate-500 font-semibold text-white z-50 w-fit'>
                <h3>{"registration.setState("}<span className='text-red-700'>{"'closed');"}</span></h3>
              </div>
         </div>*/}
      </div>
    </div>
  );
}

export default App;
