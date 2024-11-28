import { teamdata, general_chairs, general_co_chairs, honorary_chairs, program_chairs, chief_convenor, conveners, keynote_speakers, steering_committee, technical_program_committee, publication_committee, discipline_committee, advertising_and_publicaion_committee, session_management_committee, hospitality_committee, workshop_committee, transport_committee, stage_management_committee, national_committee, international_committee, technical_program_committee_rev } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm, TitleSm3, TitleSm2 } from "@/components/common/Title";
import React from "react";

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <br />
            <Title title='Collaboration And Innovation' className='title-bg' />
          </div>


          <TitleSm3 title='Conference Committee' /> <br />
          <div className='grid-3 py'>
            {teamdata.map((item) => (
              <Card
                data={item} 
                key={item.id} 
                caption={item.post} 
                title={item.title}
              />
            ))}
          </div>


          <TitleSm3 title='General Chairs' /> <br />
          <div className='grid-3 py'>
            {general_chairs.map((chair) => (
              <div key={chair.id} className="general-chair">
                <h3>{chair.title}</h3>
                <p>{chair.post}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='General Co-Chairs' /> <br />
          <div className='grid-3 py'>
            {general_co_chairs.map((chaiir) => (
              <div key={chaiir.id} className='general-chair'>
                <h3>{chaiir.name}</h3>
                <p>{chaiir.affiliation}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Honorary Chairs' /> <br />
          <div className='grid-3 py'>
            {honorary_chairs.map((chaiir) => (
              <div key={chaiir.id} className='general-chair'>
                <h3>{chaiir.name}</h3>
                <p>{chaiir.title}</p>
                <p>{chaiir.affiliation}</p>
              </div>
            ))}
          </div>



          <TitleSm3 title='Program Chairs' /> <br />
          <div className='grid-3 py'>
            {program_chairs.map((chaiir) => (
              <div key={chaiir.id} className='general-chair'>
                <h3>{chaiir.name}</h3>
                <p>{chaiir.affiliation}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Chief Convenor' /> <br />
          <div className='grid-3 py'>
            {chief_convenor.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>


          <TitleSm3 title='Convenor' /> <br />
          <div className='grid-3 py'>
            {conveners.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>




          <TitleSm3 title='Keynote Speakers' /> <br />
          <div className='grid-3 py'>
            {keynote_speakers.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>



          <TitleSm3 title='Steering Committee' /> <br />
          <div className='grid-3 py'>
            {steering_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>


          <TitleSm3 title='Technical Program Committee' /> <br />
          <div className='grid-3 py'>
            {technical_program_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.affiliation}</p>
              </div>
            ))}
          </div>

          <TitleSm3 title='Publication Committee' /> <br />
          <div className='grid-3 py'>
            {publication_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Discipline Committee' /> <br />
          <div className='grid-3 py'>
            {discipline_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>

          <TitleSm3 title='Session Management Committee' /> <br />
          <div className='grid-3 py'>
            {session_management_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Advertising and Publication Committee' /> <br />
          <div className='grid-3 py'>
            {advertising_and_publicaion_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>



          <TitleSm3 title='Stage Management Committee' /> <br />
          <div className='grid-3 py'>
            {stage_management_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Hospitality Committee' /> <br />
          <div className='grid-3 py'>
            {hospitality_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>


          <TitleSm3 title='Workshop Committee' /> <br />
          <div className='grid-3 py'>
            {workshop_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>



          <TitleSm3 title='Transport Committee' /> <br />
          <div className='grid-3 py'>
            {transport_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>


          <TitleSm3 title='Advisory' /> <br />
          <TitleSm2 title='National' /> <br />
          <div className='grid-3 py'>
            {national_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>


          <TitleSm2 title='International' /> <br />
          <div className='grid-3 py'>
            {international_committee.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
                <p>{chair.role}</p>
              </div>
            ))}
          </div>



          <TitleSm3 title='Technical Program Committee' /> <br />
          <div className='grid-3 py'>
            {technical_program_committee_rev.map((chair) => (
              <div key={chair.id} className='general-chair'>
                <h3>{chair.name}</h3>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}

export default Team;