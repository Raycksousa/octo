import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Formulario() {
  const [formValues, setFormValues] = useState({});
  const navegar = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };
  function exit(){
    navegar("/")
        }

  return (

    
    <form  class="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-4" onSubmit={handleSubmit}>
      <div class="mb-4">
      <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  name="name" placeholder="name" onChange={handleInputChange} value={formValues.name || ''} />
      </div>
      <div class="mb-4">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''} />
      </div>
      <div class="mb-4">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="file" name="arquivo" placeholder="arquivo" onChange={handleInputChange} value={formValues.arquivo || ''} />
      </div>
      <div class="mb-4">
      <select class="block appearance-none w-full bg-white border border-gray-4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9shadow-outline" name="language" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
      </select>
        </div>
        <div class="mb-4">
      <div className="radios">
        <label class="mb-4">
          <input
            type="radio"
            value="cafe"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cafe'}
          />
          Café
        </label>
        <label>
          <input
            type="radio"
            value="cha"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cha'}
          />
          Chá
        </label>
      </div>
       </div>
       <div class="mb-4">
      <div className="checks">
        <label>
          <input
            type="checkbox"
            name="social"
            value="twitter"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.twitter}
          />
          Twitter
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="instagram"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.instagram}
          />
          Instagram
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="facebook"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.facebook}
          />
          Facebook
        </label>
      </div>
      </div>
      <label>
      <textarea  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"name="bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea>
      
      </label>
      <br></br>
      <div>

      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
      
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
 onClick={exit}>
 Voltar
</button>
    </form>
  );
}

export default Formulario;
 