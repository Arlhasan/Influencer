import React from 'react'
import './Container1.css';

function container1() {
  return (
    <div className='container1'>
      {/* avatar */}
      <div className='left'>
      <div className='avatar'>
        <div className='avatarLogo'>
            Avatar
        </div> 
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 122 124" fill="none">
            <ellipse cx="61" cy="62" rx="61" ry="62" fill="white"/>
        </svg>
      </div>
      </div>
      <div className='middle'>
      {/* heading */}
      <div className='heading'>
        <h2 className='logo'>INFLUENCER</h2>
      </div>
      </div>
      <div className='right'>
      {/* settings */}
        <div className='settings'>
          <button className='settingsBtn'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#616161"></circle><path fill="#d1d1d1" d="M34.139,17.887l-0.955,0.265c-0.453,0.126-0.812-0.388-0.539-0.77l0.576-0.807 c0.123-0.2-0.08-0.441-0.298-0.355l-0.838,0.4c-0.443,0.211-0.906-0.251-0.694-0.694l0.4-0.838 c0.086-0.218-0.155-0.421-0.355-0.298l-0.807,0.576c-0.383,0.273-0.896-0.086-0.77-0.539l0.265-0.955 c0.047-0.23-0.226-0.387-0.401-0.232l-0.695,0.707c-0.329,0.335-0.897,0.07-0.852-0.397l0.095-0.987 c0.006-0.235-0.29-0.342-0.436-0.159l-0.562,0.817c-0.266,0.387-0.871,0.225-0.908-0.243l-0.078-0.988 c-0.034-0.232-0.345-0.287-0.456-0.08l-0.411,0.902c-0.195,0.428-0.819,0.373-0.937-0.082l-0.248-0.96 c-0.074-0.223-0.389-0.223-0.463,0l-0.248,0.96c-0.118,0.455-0.742,0.51-0.937,0.082l-0.411-0.902 c-0.112-0.206-0.422-0.152-0.456,0.08l-0.078,0.988c-0.037,0.469-0.642,0.631-0.908,0.243l-0.562-0.817 c-0.146-0.184-0.442-0.076-0.436,0.158l0.095,0.987c0.045,0.468-0.523,0.733-0.852,0.397l-0.695-0.707 c-0.176-0.156-0.448,0.002-0.401,0.232l0.265,0.955c0.126,0.453-0.388,0.812-0.77,0.539l-0.807-0.576 c-0.2-0.123-0.441,0.08-0.355,0.298l0.427,0.895c0.202,0.424-0.241,0.867-0.665,0.665l-0.895-0.427 c-0.218-0.086-0.421,0.155-0.298,0.355l0.576,0.807c0.273,0.383-0.086,0.896-0.539,0.77l-0.955-0.265 c-0.23-0.047-0.387,0.226-0.232,0.401l0.707,0.695c0.335,0.329,0.07,0.897-0.397,0.852l-0.987-0.095 c-0.235-0.006-0.342,0.29-0.159,0.435l0.817,0.562c0.387,0.266,0.225,0.871-0.243,0.908l-0.988,0.078 c-0.232,0.034-0.287,0.345-0.08,0.456l0.902,0.411c0.428,0.195,0.373,0.819-0.082,0.937l-0.96,0.248 c-0.223,0.074-0.223,0.389,0,0.463l0.96,0.248c0.455,0.118,0.51,0.742,0.082,0.937l-0.902,0.411 c-0.206,0.112-0.152,0.422,0.08,0.456l0.988,0.078c0.469,0.037,0.631,0.642,0.243,0.908l-0.817,0.562 c-0.184,0.146-0.076,0.442,0.158,0.436l0.987-0.095c0.468-0.045,0.733,0.523,0.397,0.852l-0.707,0.695 c-0.156,0.176,0.002,0.448,0.232,0.401l0.955-0.265c0.453-0.126,0.812,0.388,0.539,0.77l-0.576,0.807 c-0.123,0.2,0.08,0.441,0.298,0.355l0.895-0.427c0.424-0.202,0.867,0.241,0.665,0.665l-0.427,0.895 c-0.086,0.218,0.155,0.421,0.355,0.298l0.807-0.576c0.383-0.273,0.896,0.086,0.77,0.539l-0.265,0.956 c-0.047,0.23,0.226,0.387,0.401,0.232l0.695-0.707c0.329-0.335,0.897-0.07,0.852,0.397l-0.095,0.987 c-0.006,0.235,0.29,0.342,0.436,0.159l0.562-0.817c0.266-0.387,0.871-0.225,0.908,0.243l0.078,0.988 c0.034,0.232,0.345,0.287,0.456,0.08l0.411-0.902c0.195-0.428,0.819-0.373,0.937,0.082l0.248,0.96 c0.074,0.223,0.389,0.223,0.463,0l0.248-0.96c0.118-0.455,0.742-0.51,0.937-0.082l0.411,0.902c0.112,0.206,0.422,0.152,0.456-0.08 l0.078-0.988c0.037-0.469,0.642-0.631,0.908-0.243l0.562,0.817c0.146,0.184,0.442,0.076,0.436-0.158l-0.095-0.987 c-0.045-0.468,0.523-0.733,0.852-0.397l0.695,0.707c0.176,0.156,0.448-0.002,0.401-0.232l-0.265-0.956 c-0.126-0.453,0.388-0.812,0.77-0.539l0.807,0.576c0.2,0.123,0.441-0.08,0.355-0.298l-0.427-0.895 c-0.202-0.424,0.241-0.867,0.665-0.665l0.895,0.427c0.218,0.086,0.421-0.155,0.298-0.355l-0.576-0.807 c-0.273-0.383,0.086-0.896,0.539-0.77l0.955,0.265c0.23,0.047,0.387-0.226,0.232-0.401l-0.707-0.695 c-0.335-0.329-0.07-0.897,0.397-0.852l0.987,0.095c0.235,0.006,0.342-0.29,0.159-0.436l-0.817-0.562 c-0.387-0.266-0.225-0.871,0.243-0.908l0.988-0.078c0.232-0.034,0.287-0.345,0.08-0.456l-0.902-0.411 c-0.428-0.195-0.373-0.819,0.082-0.937l0.96-0.248c0.223-0.074,0.223-0.389,0-0.463l-0.96-0.248 c-0.455-0.118-0.51-0.742-0.082-0.937l0.902-0.411c0.206-0.112,0.152-0.422-0.08-0.456l-1.054-0.083 c-0.447-0.035-0.601-0.612-0.232-0.866l0.871-0.599c0.184-0.146,0.076-0.442-0.158-0.436l-0.987,0.095 c-0.468,0.045-0.733-0.523-0.397-0.852l0.707-0.695C34.527,18.113,34.369,17.84,34.139,17.887z M23.496,23.135 c0.48-0.277,1.093-0.113,1.37,0.367c0.277,0.48,0.113,1.093-0.367,1.37c-0.48,0.277-1.093,0.113-1.37-0.367 C22.852,24.025,23.016,23.412,23.496,23.135z M17.477,30.691c-0.601-0.582-1.133-1.254-1.572-2.015 c-2.181-3.778-1.418-8.441,1.57-11.352c0.616-0.6,1.642-0.438,2.073,0.307l3.022,5.234c0.407,0.705,0.407,1.573,0,2.277 l-3.024,5.237C19.116,31.123,18.094,31.288,17.477,30.691z M33.047,26.328c-0.603,2.348-2.113,4.46-4.378,5.768 c-2.265,1.308-4.849,1.559-7.184,0.907c-0.835-0.233-1.218-1.204-0.785-1.955l2.797-4.845c0.547-0.948,1.559-1.532,2.653-1.532 l5.595,0C32.613,24.671,33.263,25.488,33.047,26.328z M33.049,21.701c0.209,0.833-0.445,1.635-1.304,1.635l-6.047,0 c-0.814,0-1.565-0.434-1.972-1.139l-3.022-5.234c-0.43-0.745-0.058-1.715,0.77-1.949c4.015-1.132,8.435,0.538,10.616,4.317 C32.529,20.092,32.845,20.889,33.049,21.701z"></path><path fill="#bdbdbd" d="M39.191,14.837l-1.431,0.397c-0.679,0.188-1.217-0.581-0.808-1.154l0.863-1.209 c0.184-0.3-0.119-0.661-0.446-0.532l-1.256,0.599c-0.664,0.317-1.357-0.377-1.04-1.041l0.599-1.256 c0.129-0.327-0.232-0.63-0.532-0.446l-1.21,0.863c-0.573,0.409-1.342-0.13-1.154-0.808l0.397-1.432 c0.07-0.345-0.338-0.581-0.601-0.347l-1.041,1.06c-0.494,0.502-1.344,0.106-1.277-0.595l0.142-1.479 c0.01-0.352-0.434-0.513-0.653-0.237L28.9,8.442c-0.399,0.58-1.306,0.337-1.361-0.365l-0.117-1.481 c-0.052-0.348-0.516-0.43-0.684-0.121l-0.616,1.352c-0.292,0.641-1.227,0.559-1.403-0.123l-0.372-1.438 c-0.111-0.334-0.583-0.334-0.694,0l-0.372,1.438c-0.176,0.682-1.111,0.764-1.403,0.123l-0.616-1.352 c-0.167-0.309-0.632-0.227-0.684,0.121l-0.117,1.481C20.405,8.78,19.499,9.023,19.1,8.442l-0.841-1.224 c-0.219-0.276-0.662-0.114-0.653,0.237l0.142,1.479c0.067,0.701-0.783,1.098-1.277,0.595L15.43,8.47 c-0.263-0.233-0.672,0.003-0.601,0.347l0.397,1.432c0.188,0.678-0.581,1.217-1.154,0.808l-1.209-0.863 c-0.3-0.184-0.661,0.119-0.532,0.446l0.639,1.341c0.303,0.636-0.361,1.299-0.996,0.996l-1.341-0.639 c-0.327-0.129-0.63,0.232-0.446,0.532l0.863,1.21c0.409,0.573-0.13,1.342-0.808,1.154l-1.432-0.397 c-0.345-0.07-0.581,0.338-0.347,0.601l1.059,1.041c0.502,0.494,0.106,1.344-0.595,1.277l-1.479-0.142 c-0.352-0.01-0.513,0.434-0.238,0.652l1.224,0.841c0.58,0.399,0.337,1.306-0.365,1.361l-1.481,0.117 c-0.348,0.052-0.43,0.516-0.121,0.684l1.352,0.616c0.641,0.292,0.559,1.227-0.123,1.403l-1.438,0.372 c-0.334,0.111-0.334,0.583,0,0.694l1.438,0.372c0.682,0.176,0.764,1.111,0.123,1.403l-1.352,0.616 c-0.309,0.167-0.227,0.632,0.121,0.684l1.481,0.117c0.702,0.055,0.945,0.962,0.365,1.361L7.21,29.75 c-0.276,0.219-0.114,0.662,0.237,0.653l1.479-0.142c0.701-0.067,1.098,0.783,0.595,1.277l-1.059,1.041 c-0.233,0.263,0.003,0.672,0.347,0.601l1.431-0.397c0.679-0.188,1.217,0.581,0.808,1.154l-0.863,1.209 c-0.184,0.3,0.119,0.661,0.446,0.532l1.341-0.639c0.636-0.303,1.299,0.361,0.996,0.996l-0.639,1.341 c-0.129,0.327,0.232,0.63,0.532,0.446l1.209-0.863c0.573-0.409,1.342,0.13,1.154,0.808l-0.397,1.432 c-0.071,0.345,0.338,0.581,0.601,0.347l1.041-1.06c0.494-0.502,1.344-0.106,1.277,0.595l-0.142,1.479 c-0.01,0.352,0.434,0.513,0.653,0.237l0.841-1.224c0.399-0.58,1.306-0.337,1.361,0.365l0.117,1.481 c0.052,0.348,0.516,0.43,0.684,0.121l0.616-1.352c0.292-0.641,1.227-0.559,1.403,0.123l0.372,1.438 c0.111,0.334,0.583,0.334,0.694,0l0.372-1.438c0.176-0.682,1.111-0.763,1.403-0.123l0.616,1.352 c0.168,0.309,0.632,0.227,0.684-0.121l0.117-1.481c0.055-0.702,0.962-0.945,1.361-0.365l0.842,1.224 c0.219,0.276,0.662,0.114,0.653-0.237l-0.142-1.479c-0.067-0.701,0.783-1.098,1.277-0.595l1.041,1.06 c0.263,0.233,0.672-0.003,0.601-0.347l-0.397-1.432c-0.188-0.678,0.581-1.217,1.154-0.808l1.21,0.863 c0.3,0.184,0.661-0.119,0.532-0.446l-0.639-1.341c-0.303-0.636,0.361-1.299,0.996-0.996l1.341,0.639 c0.327,0.129,0.63-0.232,0.446-0.532l-0.863-1.21c-0.409-0.573,0.13-1.342,0.808-1.154l1.432,0.397 c0.345,0.07,0.581-0.338,0.347-0.601l-1.06-1.041c-0.502-0.494-0.105-1.344,0.595-1.277l1.479,0.142 c0.352,0.01,0.513-0.434,0.237-0.653l-1.224-0.842c-0.58-0.399-0.337-1.306,0.365-1.361l1.481-0.117 c0.348-0.052,0.43-0.516,0.121-0.684l-1.352-0.616c-0.641-0.292-0.559-1.227,0.123-1.403l1.438-0.372 c0.334-0.111,0.334-0.583,0-0.694l-1.438-0.372c-0.682-0.176-0.764-1.111-0.123-1.403l1.352-0.616 c0.309-0.167,0.227-0.632-0.121-0.684l-1.579-0.124c-0.669-0.053-0.901-0.917-0.348-1.297l1.306-0.897 c0.276-0.219,0.114-0.662-0.237-0.653l-1.479,0.142c-0.701,0.067-1.098-0.783-0.595-1.277l1.06-1.041 C39.771,15.175,39.536,14.766,39.191,14.837z M23.496,23.135c0.478-0.276,1.09-0.112,1.366,0.366 c0.276,0.478,0.112,1.09-0.366,1.366s-1.09,0.112-1.366-0.366C22.854,24.023,23.018,23.411,23.496,23.135z M14.227,34.02 c-0.9-0.872-1.698-1.879-2.356-3.019c-3.268-5.661-2.125-12.647,2.352-17.009c0.924-0.9,2.461-0.656,3.105,0.461l4.528,7.842 c0.61,1.056,0.61,2.356,0,3.412l-4.53,7.847C16.683,34.668,15.151,34.915,14.227,34.02z M37.555,27.484 c-0.903,3.517-3.165,6.683-6.559,8.642s-7.266,2.336-10.763,1.359c-1.251-0.349-1.825-1.804-1.176-2.929l4.191-7.259 c0.82-1.42,2.335-2.295,3.975-2.295l8.383,0C36.905,25.001,37.878,26.225,37.555,27.484z M37.557,20.551 c0.313,1.247-0.667,2.45-1.953,2.45l-9.06,0c-1.219,0-2.346-0.65-2.955-1.706l-4.528-7.842c-0.645-1.117-0.087-2.57,1.154-2.919 c6.016-1.697,12.637,0.806,15.906,6.468C36.778,18.141,37.252,19.335,37.557,20.551z"></path>
</svg></button>
        </div>
    </div>
    </div>
  );
};

export default container1;