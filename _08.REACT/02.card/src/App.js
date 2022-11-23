import './App.css';
import Profile from './component/Profile';

function App() {
  let person = [
    {
      img: 'https://w.namu.la/s/6bfab95f914ff61216609b6603fc74b249c3da1a6f346df47ff2320f1fe3d9c96ae8744c197e55b2d2049727998129ecb2ace74f73199a9478615de3f3ebb77a04a19952b8365b8095b519003b8cde69cef68bd78f9a5e26dc119e3173c0e76077debe37fe80bcc7bc1fe0bf710cee14',
      name: '해리',
      job: '마법 정부 오러 본부 본부장',
      isNew: true,
    },
    {
      img: 'https://w.namu.la/s/36b75f2218f00857ff900304bd8d3845c3e930452be5895b54ea3dcd9b331f9ee4b994e108c4db6d18c320e71d2480d92ee3a725a0f93eee1b64ea3567cff7a5bf1ab7e4190c5976c7ace3043b2fb0e3f54ce548efc031c5d9d72caf6926bf61655f8fc4aa7f0258c2e7862f9ccbd1b0',
      name: '론',
      job: '마법 정부 산하 오러 본부 오러',
      isNew: true,
    },{
      img: 'https://w.namu.la/s/ea0c0b04eb136a71ea4356829c9dd629b1867956174232f8dc6c58fabb9af4dac97b7a5852b5c1c8ad882f10d1593fdf0f92714d54ea3cca6cf333d64a78fccfc8ce04b951cb6e071081861f9d0f648a20695670bff6335e57306aaa9af280dfd4465f273149fda1812d14f48e9c84c0',
      name: '헤르미온느',
      job: '마법 정부 마법 사법부 장관',
      isNew: false,
    },
  ]
  return (
    <>
      <h1>Card</h1>

      {/* 
        <Profile img={person[0].img} name={person[0].name} job={person[0].job} isNew={person[0].isNew} />
        <Profile img={person[1].img} name={person[1].name} job={person[1].job} isNew={person[1].isNew} />
        <Profile img={person[2].img} name={person[2].name} job={person[2].job} isNew={person[2].isNew} />
      */}

      {person.map((item)=>{
        return <Profile img={item.img} name={item.name} job={item.job} isNew={item.isNew} />
      })}

      <Profile name='알버스 덤블도어' job='호그와트 교장' isNew={false}/>
      <Profile isNew={false}/>
    </>
  );
}

export default App;
