import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PROBLEMS } from '../data/problems';
import Navbar from '../components/Navbar';

import { Panel, Group , Separator  } from "react-resizable-panels";
import ProblemDescription from '../components/ProblemDescription';
import OutputPanel from '../components/OutputPanel';
import CodeEditor from '../components/CodeEditor';

const ProblemPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  // update problem when URL param changes
     useEffect(() => {
       if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handlelanguageChange = (e) => {};

  const handleProblemChange = () => {};

  const triggerConfetti = () => {};

  const checkIfTestsPassed = () => {};

  const handleRunCode = () => {};


  return (
    <div className='h-screen w-screen bg-base-100 flex flex-col'>

     <Navbar/>
    
     <div className='flex-1'>

      <Group direction = "horizontal" >

        {/* left panel- problem desc */}
        <Panel defaultSize={40} minSize={30}>
          <ProblemDescription />
        </Panel>

        <Separator className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize"/>

        {/* right panel- code editor */}
        <Panel defaultSize={60} minSize={30} >
          <Group direction="vertical">

            {/* Top panel - code editor */}
            <Panel defaultSize={70} minSize={30}>
              <CodeEditor/>
            </Panel>

              <Separator
              className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize"/>

            {/* bottom panel - output  */}
            <Panel defaultSize={30} minSize={30}>
              <OutputPanel/>
            </Panel>

          </Group>
        </Panel>


      </Group>
    
    </div>
  </div>
  )
}

export default ProblemPage;


