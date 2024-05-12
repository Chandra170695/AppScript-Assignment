import {useState} from 'react'
import './index.css'

const CheckboxAccordion = () => {
  const items = [
    {
      id: 'segment1',
      header: 'IDEAL FOR',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment2',
      header: 'OCASSION',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment3',
      header: 'WORK',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment4',
      header: 'FABRIC',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment5',
      header: 'SEGMENT',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment6',
      header: 'SUITABLE FOR',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment7',
      header: 'RAW MATERIALS',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'segment8',
      header: 'PATTERN',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    // Add more items as needed
  ]

  const [openId, setOpenId] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState({})

  const toggleAccordion = id => {
    setOpenId(openId === id ? null : id)
  }

  const handleOptionChange = (event, sectionId) => {
    const {name, checked} = event.target
    setSelectedOptions({
      ...selectedOptions,
      [sectionId]: {...(selectedOptions[sectionId] || {}), [name]: checked},
    })
  }
  const clearSelection = sectionId => {
    setSelectedOptions({...selectedOptions, [sectionId]: {}})
  }

  return (
    <div className="accordion">
      <div className="checkbox-container">
        <input type="checkbox" id="myCheckbox" />
        <label htmlFor="myCheckbox" className="myCheckboxVal">
          CUSTOMIZABLE
        </label>
      </div>
      {items.map(({id, header, options}) => (
        <div
          key={id}
          className={`accordion-item ${openId === id ? 'open' : ''}`}
        >
          <button
            type="button"
            className="accordion-header"
            onClick={() => toggleAccordion(id)}
          >
            {header}
            <svg
              className="svgClass"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                stroke="#292D32"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p className="textAll">All</p>
          {openId === id && (
            <div className="accordion-content">
              <button
                className="accordion-button"
                type="button"
                onClick={() => clearSelection(id)}
              >
                Unselect all
              </button>
              <ul className="ulOption">
                {options.map(option => (
                  <li key={option} >
                    <input
                      type="checkbox"
                      id={`${id}-checkbox-${option}`}
                      name={option}
                      checked={
                        selectedOptions[id] && selectedOptions[id][option]
                      }
                      onChange={event => handleOptionChange(event, id)}
                    />
                    <label htmlFor={`${id}-checkbox-${option}`}>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CheckboxAccordion
