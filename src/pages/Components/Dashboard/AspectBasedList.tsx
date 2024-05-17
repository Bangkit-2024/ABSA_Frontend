import React from "react";

interface absaComponent {
  aspect: "Rasa"|"Harga"|"Tempat"|"Pelayanan"|"Jarak";
  sentiment: number;
}

interface absaDisplay {
  comment: string;
  absa: absaComponent[];
}

const exampleData: absaDisplay[] = [
  {
    comment: "Lorem Ipsum dolor sit Amet",
    absa: [
        { aspect: "Rasa", sentiment: 1 },
        { aspect: "Harga", sentiment: 1 },
        { aspect: "Tempat", sentiment: 1 },
    ],
  },
  {
    comment: "Lorem Ipsum dolor sit Amet",
    absa: [
        { aspect: "Rasa", sentiment: 1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: 0 },
    ],
  },
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  },  
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 
  {
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt, fugiat pariatur vitae officia animi, nesciunt quos cumque expedita quia corrupti dolorem maiores nisi blanditiis! Ducimus culpa necessitatibus fuga in?",
    absa: [
        { aspect: "Rasa", sentiment: -1 },
        { aspect: "Harga", sentiment: -1 },
        { aspect: "Tempat", sentiment: -1 },
    ],
  }, 

  {
    comment: "Lorem Ipsum dolor sit Amet",
    absa: [
        { aspect: "Rasa", sentiment: 1 },
        { aspect: "Pelayanan", sentiment: 1 },
        { aspect: "Tempat", sentiment: 1 },
    ],
  }
];

function AspectBasedElement({absaData}:{absaData:absaDisplay}) {
  return <React.Fragment>
    <div className="py-3 px-5 grid-row-2 gap-1">
        <div className="py-2">{absaData.comment}</div>
        <div className="text-xs text-center">
            {absaData.absa.map(
                ({aspect,sentiment}:absaComponent)=>{
                    let color = "slate"
                    if(sentiment===1){
                        color="green"
                    }else if(sentiment===-1){
                        color="red"
                    }
                    return <span className={`me-2 px-2.5 py-0.5 inline-block text-[0.75rem] font-medium rounded border bg-${color}-100 border-transparent text-${color}-500 dark:bg-${color}-500/20 dark:border-transparent`}>{aspect}</span>
                }
            )}
        </div>
    </div>
  </React.Fragment>;
}

export default function AspectBasedList() {
  const absaList: absaDisplay[] = exampleData;
  return (
    <>
      <div className="grid grid-cols-1 divide-y h-[80vh] md:h-[180vh] overflow-auto">
        
          {absaList.map(
            (absa: absaDisplay): React.ReactElement => (
              <AspectBasedElement absaData={absa} />
            )
          )}
        
      </div>
    </>
  );
}
