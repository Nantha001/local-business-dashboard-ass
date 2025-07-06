import { useState } from 'react';
import InputForm from './components/InputForm';
import DisplayCard from './components/DisplayCard';
import "./index.css"

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formValues, setFormValues] = useState(null);

  const handleFormSubmit = async (form) => {
    setFormValues(form);
    const res = await fetch("https://business-vvdp.onrender.com/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setBusinessData(data);
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
      <DisplayCard data={businessData} onRegenerate={handleRegenerate} />
      
    </div>
    </div>
  );
}

export default App;
