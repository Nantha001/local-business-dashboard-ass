import { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayCard from './components/DisplayCard';
import "./index.css"




function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formValues, setFormValues] = useState(null);
  const [loader, setLoader] = useState(null);

  const handleFormSubmit = async (form) => {
    setFormValues(form);
    const res = await fetch("https://business-vvdp.onrender.com/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if(res.ok){
      setLoader(false);
      setBusinessData(data);
    }else{
      setLoader(true)
    }
  };

  const handleRegenerate = async () => {
    const res = await fetch(`https://business-vvdp.onrender.com/regenerate-headline?name=${formValues.name}&location=${formValues.location}`);
    const { headline } = await res.json();
    setBusinessData({ ...businessData, headline });
  };

  return (
    <div className='bg'>

    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 heading">Mini Business Dashboard</h1>
      <InputForm onSubmit={handleFormSubmit} />
  {loader && (
  <div className="flex justify-center mt-4">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}




      
      <DisplayCard data={businessData} onRegenerate={handleRegenerate} />
      
    </div>
    </div>
  );
}

export default App;
