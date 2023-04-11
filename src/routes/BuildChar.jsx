import React from "react";
import { useState } from "react";
import App from "../App";
import Card from "../components/Card";

const BuildChar = () =>{

    const [stats, setStats] = useState({
      name: '',
      race: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
    });
    
    const [show, setShow] = useState(0)



    const attributes = () =>{
        




    }




    return (
      <>
        <div className=" flex flex-col gap-3 ">
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character name"
            type="text"
            name="search"
            value={stats.name}
            onChange={(event) =>
              setStats({
                name: event.target.value,
                race: stats.race,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character race"
            type="text"
            name="search"
            value={stats.race}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: event.target.value,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character strength "
            type="text"
            name="search"
            value={stats.strength}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: event.target.value,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character dexterity"
            type="text"
            name="search"
            value={stats.dexterity}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: stats.strength,
                dexterity: event.target.value,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character Constitution"
            type="text"
            name="search"
            value={stats.constitution}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: event.target.value,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character Intelligence"
            type="text"
            name="search"
            value={stats.intelligence}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: event.target.value,
                wisdom: stats.wisdom,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character Wisdom"
            type="text"
            name="search"
            value={stats.wisdom}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: event.target.value,
                charisma: stats.charisma,
              })
            }
          />
          <input
            className="placeholder:italic placeholder:text-slate-500 block bg-slate-200 w-full border border-slate-500 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-slate-700 "
            placeholder="Enter Character Charisma"
            type="text"
            name="search"
            value={stats.charisma}
            onChange={(event) =>
              setStats({
                name: stats.name,
                race: stats.race,
                strength: stats.strength,
                dexterity: stats.dexterity,
                constitution: stats.constitution,
                intelligence: stats.intelligence,
                wisdom: stats.wisdom,
                charisma: event.target.value,
              })
            }
          />
          <button className=" rounded-xl  bg-slate-600  text-slate-200" onClick={(event)=>setShow(1)}>Save Character</button>
         {show?<div className=" box-border border-4 border-orange-500">
            <h1>Sample Character</h1><br></br>
            <a>Name:{'   '}{stats.name}</a> <br></br>
            <a>Race:{'   '}{stats.race}</a> <br></br>
            <a>strength:{'   '}{stats.strength}</a> <br></br>
            <a>dexterity:{'   '}{stats.dexterity}</a> <br></br>
            <a>constitution:{'   '}{stats.constitution}</a> <br></br>
            <a>wisdom:{'   '}{stats.wisdom}</a> <br></br>
            <a>charisma:{'   '}{stats.charisma}</a> <br></br>
          </div>:''}
          
        </div>
      </>
    );

}

export default BuildChar; 