import React, { useState }  from 'react';
import { BASE_URL } from '../../constants';
import './documents.css'

const Documents = () => {

    const [img, setImg] = useState(null);
    // const [docs, setDocs] = useState([]);
    const [fileName, setFileName] = useState(['Seleccione un archivo']);
    const [count,setCount] = useState(1);

    const validateBtnText = (str) => {
      const index = str.lastIndexOf('.')
      if (str.length>21){
        return str.slice(0,14) + '... ' + str.slice(index)
      }
      return str;
    }

  
    const handleSubmit = () => {
      try {
  
        const data = new FormData();
        data.append('firstPhoto', img);

        console.log(img, 'img')
        console.log(data, 'data')

  
        if (img!==null) {
          const url = `${BASE_URL}/upload`;
          fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: data,
          })
            .then((res) => res.json())
            .then((newdata) => {
              if(newdata.msg === 'file is not uploaded') {
                alert('file is not uploaded')
              } else {
              // setDocs([...docs, newdata]);
              alert('файл загружен')
              setCount(prev => prev + 1)
              setImg(null)
              // showToast({ message: 'Файл загружен', type: 'success' });
              }
            });
        } else { 
          // showToast({ message: 'Добавьте файл!', type: 'warning' });
          alert('Добавьте файл')
        
        }
      } catch (error) {
        console.log(error);
        alert({ message: 'error upload', type: 'error' });
      }
    };


    const uploudImg = (e) => {
      setImg(e.target.files[0]);
      setFileName(validateBtnText(e?.target?.files[0]?.name ?? 'Seleccione un archivo'));
    };


    const handleButtonClick = () => {
      document.getElementById('fileInput').click();
    };


  return (
    <div className='loading__documents'>
      {
        count === 1 && (
          <>
          <p>Sube una foto de la parte frontal del documento</p>
          <div style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
          <input type="file" name="firstPhoto" id="fileInput" required onChange={uploudImg} />
          <button style={{ display: 'block', width: '100%', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}  onClick={handleButtonClick} type="submit" >{img?.name ?? 'Seleccione un archivo'}</button>
          <button className="btn btn-dark mt-3" type="button" onClick={handleSubmit} >Enviar</button>
        </div>
          </>
        )
      }


      {
        count === 2 && (
          <>
          <p>Sube una foto de la parte trasera del documento</p>
          <div style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
            <input type="file" name="firstPhoto" id="fileInput" required onChange={uploudImg} />
            <button style={{ display: 'block', width: '100%', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}  onClick={handleButtonClick} type="submit" >{img?.name ?? 'Seleccione un archivo'}</button>
          <button className="btn btn-dark mt-3" type="button" onClick={handleSubmit} >Enviar</button>
          </div>
          </>
        )
      }

      {
        count === 3 && (
          <>
          <p>Sube un vídeo-selfie de cinco segundos donde miras directamente a la cámara</p>
          <div style={{ display: 'inline-block', position: 'relative', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
            <input type="file" name="firstPhoto" id="fileInput" required onChange={uploudImg} />
            <button style={{ display: 'block', width: '100%', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}  onClick={handleButtonClick} type="submit" >{img?.name ?? 'Seleccione un archivo'}</button>
            <button className="btn btn-dark mt-3" type="button" onClick={handleSubmit} >Enviar</button>
          </div>
          </>
        )
      }

      {
        count === 4 && (
          <>
          <p>все файлы загружены</p>
          <button className="btn btn-dark mt-3" type="button" onClick={()=> setCount(1)} >Повторить</button>
          </>
        )
      }


        {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDoc"/>
            <label className="form-check-label" for="flexCheckDoc">
            Estoy de acuerdo con las reglas
            </label>
            <button className="btn btn-dark btn-lg mt-3" type="button" onClick={handleSubmit} >Enviar</button>
        </div> */}
    </div>
  )
}

export default Documents;
