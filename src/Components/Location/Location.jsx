import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Location.css";
import school_icon from '../../assets/school_icon.png'

const Location = () => {
  // School location
  //mark location for easy location
  const schoolPosition = [26.9063, 86.0462];
  const birendraBazaar =[26.894996231290307, 86.07878315170257];
  const godar =[26.88720742978355, 86.11583852254459];
  const mangalpur = [26.83019542082537, 86.0455425803253];
  const dhalkebar = [26.92990993242976, 85.9554285574697];
  const radhapur = [26.87271792473557, 86.07262449005984];


  // 🚌 Bus route path (example stops)
  const busRoute_1 = [
    [26.904042754676784, 86.0451638572327], // Bus start (example area)
    [26.90557388880805, 86.04171961780503], // Stop 1
    [26.900866544006345, 86.04011884709229], // Stop 2
    [26.895870845858987, 86.04017308127835],
    [26.884691450047477, 86.0388493535728], 
    [26.880136397117404, 86.03998661027339],
    [26.874260490538333, 86.04441761949977],
    [26.874260490538333, 86.04441761949977],
    [26.869800722346774, 86.05061888677382],
    [26.864680385433957, 86.05469584442301],
    [26.844249601384284, 86.0634643570153],// Stop 3
    [26.834324856350133, 86.06017711129029],
    [26.83102019524883, 86.05509476811847],
    [26.830123277884642, 86.04566084541327]
    
    //schoolPosition       // School
  ];


  //route to godar from school
  const busRoute_2 =[
    [26.904063588611173, 86.04510228752613],
    [26.900114320661512, 86.05442422819175],
    [26.896276112881765, 86.0641515618585],
    [26.89551863725476, 86.07285719423304],
    [26.8946061171626, 86.0835220043015],
    [26.893447907922386, 86.08867731850988],
    [26.890674487095335, 86.09486072834711],
    [26.890054746416432, 86.10501847650032],
    [26.887242529176252, 86.1156417546598]
  ];

//route for dalkebar
  const busRoute_3 = [
    [26.904295546494247, 86.04443840609517],
    [26.91790745460052, 86.01701201504073],
    [26.91456094393023, 86.00384012935349],
    [26.916137677736558, 85.99088476809295],
    [26.922733978291415, 85.98669863446263],
    [26.929362067576687, 85.95775657365903]

  ];

//route for radhapur
  const busRoute_4 = [
    [26.894956392517987, 86.07899665801042],
    [26.89032520328606, 86.08197927440638],
    [26.888966429887706, 86.08009099951552],
    [26.886842117694503, 86.07970476143456],
    [26.87422938766739, 86.07981204979802],
    [26.87311924687898, 86.07468366627499],
    [26.872506750782165, 86.07217311874865]

  ];
  


  return (
    <div className="location">
      <MapContainer
        center={schoolPosition}
        zoom={13}
        style={{ height: "350px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🚌 Bus Route Line */}
        <Polyline positions={busRoute_1} pathOptions={{ color: "blue", weight: 4 }} />
        <Polyline positions={busRoute_2} pathOptions={{ color: "blue", weight: 4 }} />
        <Polyline positions={busRoute_3} pathOptions={{ color: "blue", weight: 4 }} />
        <Polyline positions={busRoute_4} pathOptions={{ color: "blue", weight: 4 }} />

        {/* 🎓 School Marker */}

        <Marker position={schoolPosition}>
          <Popup>
            <img className="school" src={school_icon} alt="" />
            <strong>Super Sense Secondary English Boarding School</strong>
            <br />
            Dharapani-9, Dhanushadham, Nepal
          </Popup>
        </Marker>

        <Marker position={birendraBazaar}>
          <Popup>
            <strong>Birendrabazaar</strong>
            <br />
            Ganeshman Charnath Municipality, Nepal
          </Popup>
        </Marker>

        <Marker position={godar}>
          <Popup>
            <strong>Godar</strong>
            <br />
            Ganeshman Charnath Municipality, Nepal
          </Popup>
        </Marker>

        <Marker position={mangalpur}>
          <Popup>
            <strong>Mangalpur</strong>
            <br />
             Dhanushadham, Nepal
          </Popup>
        </Marker>

        <Marker position={radhapur}>
          <Popup>
            <strong>Radhapur</strong>
            <br />
             Ganeshman Charnath Municipality, Dhanusha
          </Popup>
        </Marker>

       <Marker position={dhalkebar}>
          <Popup>
            <strong>Dhalkebar</strong>
            <br />
             Dhanushadham, Nepal
          </Popup>
        </Marker>
      </MapContainer>

      
    </div>
  );
};

export default Location;
