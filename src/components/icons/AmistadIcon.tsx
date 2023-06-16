import { component$ } from '@builder.io/qwik';

export interface AmistadIconProps {
  variant: 'light' | 'dark';
  style: string;
}

export const AmistadIcon = component$<AmistadIconProps>(({ variant, style }) => {
  return (
    <>
      {variant === 'light' ?
        <svg
          class={style}
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="363.331"
          version="1.1"
          viewBox="0 0 400 363.331"
        >
          <g fillRule="evenodd" stroke="none">
            <path
              fill="#d3140c"
              d="M245.643 292.844c-3.02.946-5.666 3.654-6.463 6.614-.219.814-.308 10.217-.248 26.429l.092 25.164.76 1.421c1.03 1.929 2.9 3.733 4.761 4.594l1.544.714H388.73l1.514-.794c2.064-1.081 3.589-2.584 4.656-4.589l.895-1.682v-51.136l-.895-1.682c-1.067-2.004-2.592-3.508-4.656-4.589l-1.514-.793-70.816-.064c-58.803-.053-71.063.014-72.271.393m17.099 27.762v17.493h21.891l-.096 3.28-.096 3.28-14.719.088-14.718.088v-41.723h7.738v17.494m35.578 3.28l-.086 20.773-3.953.095-3.953.095V303.112h8.079l-.087 20.774m20.091-5.096c3.696 8.615 6.811 15.719 6.924 15.789.112.069 3.292-6.983 7.066-15.671l6.862-15.796h3.98c2.188 0 3.906.118 3.816.263-.089.145-3.819 8.661-8.288 18.924a8627.067 8627.067 0 01-8.986 20.594l-.861 1.935H321.361l-8.344-19.092a33827.678 33827.678 0 00-9.12-20.858l-.777-1.766 4.285.008 4.285.008 6.721 15.662m63.351-12.398l-.097 3.28-11.186.089-11.185.088v10.42h19.848v6.728h-19.848v11.102h23.212V344.834l-15.559-.087-15.559-.088-.087-20.773-.087-20.774h30.644l-.096 3.28"
            ></path>
            <path
              fill="#fcfbfb"
              d="M147.855 5.589c-29.029 1.86-55.327 10.799-79.139 26.901-4.912 3.321-20.553 15.219-20.591 15.663-.009.117 3.654.918 8.141 1.78 36.782 7.063 64.889 19.984 91.253 41.949 6.415 5.345 17.246 16.473 19.865 20.41.036.053 1.485-.53 3.22-1.295 37.746-16.643 81.161-18.8 121.326-6.026 4.709 1.497 8.647 2.638 8.751 2.534.691-.691-12.112-25.056-17.246-32.82-30.14-45.585-82.898-72.473-135.58-69.096m24.727 14.582c38.53 5.107 71.606 24.491 94.643 55.464 3.046 4.096 7.075 10.143 6.885 10.334-.074.073-2.68-.236-5.791-.688-32.253-4.687-64.717-1.661-92.223 8.594l-4.391 1.638-4.862-4.779c-22.963-22.572-54.34-40.668-85.345-49.222l-1.092-.301 3.279-1.952c18.906-11.254 39.624-17.861 62.32-19.873 4.65-.412 21.243.078 26.577.785M35.372 71.405c-3.759 5.06-5.933 8.272-5.733 8.472.075.075 2.361.38 5.08.678 50.413 5.525 92.712 34.611 116.513 80.118 1.932 3.693 3.024 5.45 3.29 5.29.219-.132 2.11-1.502 4.202-3.046 42.213-31.148 95.498-38.674 142.622-20.144l2.102.827v-.952c0-.94-1.328-9.041-2.124-12.959l-.41-2.019-3.359-1.115c-43.948-14.599-95.896-8.277-135.325 16.47l-3.119 1.958-1.075-1.76C133.741 103.457 92.645 75.75 46.423 67.974c-8.358-1.406-7.189-1.769-11.051 3.431m-19.863 30.467c-.883 1.65-5.221 15.368-6.404 20.255-21.5 88.764 39.937 176.254 130.508 185.851l6.117.65 1.238.133 1.56-4.254c14.993-40.898 11.766-86.522-8.789-124.273-24.209-44.461-67.529-73.279-117.946-78.463-6.134-.631-5.891-.635-6.284.101m29.283 18.221c5.468 1.577 11.934 3.889 16.636 5.948l3.416 1.496-1.103 4.44c-.607 2.442-2.123 8.65-3.369 13.796-1.246 5.146-2.373 9.233-2.504 9.083-.257-.293-21.913-34.561-22.953-36.32l-.627-1.059 2.957.646c1.626.355 5.022 1.242 7.547 1.97m-10.151 23.825c6.341 10.046 11.474 18.308 11.405 18.361-.155.118-27.313-6.512-27.52-6.719-.857-.857 2.69-28.197 3.916-30.19.253-.41-.277-1.216 12.199 18.548m48.31-6.135c3.698 2.482 7.694 5.465 12.074 9.013l.996.806-5.706 24.601c-3.138 13.531-5.782 24.595-5.874 24.588-.093-.007-2.278-3.375-4.856-7.485a6837.69 6837.69 0 00-7.996-12.716l-3.308-5.243 4.22-17.294c5.366-21.99 4.776-19.899 5.502-19.511.329.177 2.556 1.635 4.948 3.241m157.578 18.423c-.098.105-1.536.219-3.196.253-10.771.225-30.102 4.709-44.398 10.299-7.784 3.044-25.225 12.101-27.664 14.366-.323.3.128 1.525 2.06 5.593 14.625 30.795 17.49 64.989 8.148 97.242-1.657 5.719-3.286 10.224-6.866 18.985-2.012 4.922-2.255 5.733-1.751 5.821 1.479.256 17.788-2.47 24.728-4.134 62.035-14.874 107.43-66.848 114.369-130.941.722-6.677.793-6.225-1.081-6.921-13.967-5.187-26.186-8.245-38.772-9.706-5.38-.624-25.175-1.287-25.577-.857m-129.471 6.517c3.645 4.246 7.846 9.836 10.646 14.165l2.009 3.107-.61 2.601c-3.254 13.875-12.812 53.528-13.009 53.973-.192.432-1.275-1.047-4.434-6.056-2.299-3.645-5.671-8.989-7.494-11.876l-3.315-5.248 6.3-27.132c3.466-14.922 6.417-27.132 6.56-27.132.142 0 1.649 1.619 3.347 3.598m-67.059 13.289l12.88 3.138 7.87 12.439c4.328 6.842 7.828 12.481 7.777 12.532-.051.052-11.162-2.293-24.691-5.21l-24.597-5.303-1-4.205c-1.528-6.428-3.043-15.532-3.057-18.374l-.005-1.048 5.971 1.446c3.284.796 11.768 2.859 18.852 4.585m211.159-5.028c-6.785 31.426-30.478 63.245-58.829 79.003l-1.988 1.106.218-2.349c.276-2.964-.282-14.833-.946-20.149-.277-2.22-.505-4.132-.507-4.25-.001-.117 1.322-1.173 2.941-2.347 16.148-11.709 29.734-30.741 34.915-48.911.316-1.111.645-2.095.73-2.187.384-.419 8.709-.927 15.854-.966l7.848-.043-.236 1.093m20.368 1.476a130.89 130.89 0 0113.361 3.35c3.267.996 3.1.41 1.931 6.758-9.623 52.291-48.1 94.187-99.006 107.802-4.493 1.202-4.273 1.293-3.438-1.421 1.5-4.866 4.729-19.595 4.729-21.565 0-.145 1.855-1.193 4.122-2.328 36.277-18.173 62.358-51.956 71.708-92.885.238-1.044-.385-1.071 6.593.289m-60.1 3.206c-4.568 11.242-12.359 22.216-21.574 30.387-1.968 1.745-3.615 3.135-3.661 3.09-.045-.046-.76-2.424-1.589-5.286-.829-2.862-2.502-7.847-3.717-11.079-1.216-3.232-2.21-5.917-2.21-5.969 0-.2 8.84-4.508 12.144-5.918 6.06-2.584 16.009-5.973 21.39-7.285.033-.008-.319.919-.783 2.06m-80.41 27.207c8.911 23.103 11.406 47.845 7.269 72.092-.948 5.558-2.026 10.094-2.32 9.758-.569-.653-19.692-31.174-19.649-31.362 1.061-4.727 13.059-54.497 13.122-54.434.05.05.76 1.826 1.578 3.946m-79.171 11.801c14.71 3.17 26.964 5.968 27.23 6.218.57.535 15.776 24.473 15.647 24.633-.267.328-56.897-11.844-57.406-12.339-2.602-2.532-13.784-24.262-12.491-24.273.151-.002 12.31 2.591 27.02 5.761m31.122 42.535l22.208 4.661 9.54 15.086c5.248 8.297 9.456 15.17 9.353 15.273-.103.104-2.362-.356-5.019-1.021-24.708-6.183-46.459-18.494-64.126-36.297l-4.492-4.526 5.165 1.081c2.84.595 15.158 3.179 27.371 5.743m168.037 66.764v20.862l14.718-.088 14.719-.088.096-3.28.096-3.28h-21.891V303.112h-7.738v20.861m35.324.007v20.869l3.953-.095 3.953-.095.086-20.773.087-20.774h-8.079v20.868m13.569-19.102c.427.971 4.531 10.357 9.12 20.858l8.344 19.092H328.924l.861-1.935c.474-1.064 4.517-10.331 8.986-20.594 4.469-10.263 8.199-18.779 8.288-18.924.09-.145-1.628-.263-3.816-.263h-3.98l-6.862 15.796c-3.774 8.688-6.954 15.74-7.066 15.671-.113-.07-3.228-7.174-6.924-15.789l-6.721-15.662-4.285-.008-4.285-.008.777 1.766m47.404 19.008l.087 20.773 15.559.088 15.559.087V338.099h-23.212v-11.102h19.848v-6.728h-19.848v-10.42l11.185-.088 11.186-.089.097-3.28.096-3.28h-30.644l.087 20.774"
            ></path>
          </g>
        </svg>
        :
        <svg
          class={style}
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="363.331"
          version="1.1"
          viewBox="0 0 400 363.331"
        >
          <g fillRule="evenodd" stroke="none">
            <path
              fill="#fbfafa"
              d="M254.668 323.97v20.858h29.268v-6.729h-21.531V303.112h-7.737v20.858m35.66 0v20.858h7.401v-41.716h-7.401v20.858m12.781-20.616c-.005.368 17.543 40.538 17.933 41.053.22.29 1.432.421 3.913.421h3.595l8.98-20.613c4.939-11.337 8.98-20.728 8.98-20.869 0-.141-1.698-.213-3.774-.161l-3.773.095-6.901 15.875c-3.796 8.73-6.967 15.808-7.047 15.728-.08-.08-3.199-7.224-6.93-15.874L311.3 303.28l-4.094-.094c-2.252-.052-4.096.023-4.097.168m48.111 20.616v20.858h30.95v-6.729h-23.566l.093-5.635.092-5.635 10.008-.089 10.009-.089v-6.382h-20.202l.092-5.298.093-5.299 11.354-.089 11.354-.088v-6.383H351.22v20.858"
            ></path>
            <path
              fill="#d3140c"
              d="M245.347 292.834c-2.921.913-5.737 3.777-6.5 6.612-.224.83-.312 10.076-.251 26.441l.092 25.164.754 1.411c.985 1.844 2.816 3.596 4.754 4.551l1.557.767 70.647.088c80.651.1 72.876.402 76.253-2.958 3.12-3.103 2.974-1.643 2.974-29.763 0-28.122.145-26.662-2.974-29.759-3.377-3.353 4.357-3.045-75.703-3.019-57.006.018-70.454.106-71.603.465m17.058 27.772v17.493H284.272v6.729h-29.604v-41.716h7.737v17.494m35.661 3.364v20.858h-8.074v-41.716h8.074v20.858m19.663-6.14c3.486 8.095 6.581 15.199 6.878 15.787l.54 1.069 6.863-15.787 6.863-15.787h3.987c2.192 0 3.983.038 3.979.084-.004.046-4.066 9.394-9.027 20.774l-9.02 20.689h-7.9l-9.057-20.689c-4.981-11.38-9.057-20.728-9.058-20.774-.001-.046 1.937-.084 4.306-.084h4.308l6.338 14.718m63.768-11.354v3.364h-22.54v10.419l10.009.089 10.008.089v6.392l-10.008.089-10.009.089v11.084l11.691.088 11.69.088v6.392l-15.727.088-15.728.087v-41.722h30.614v3.364"
            ></path>
            <path
              fill="#f48c8c"
              d="M290.15 323.97c0 11.564.042 16.295.094 10.513.051-5.782.051-15.244 0-21.026-.052-5.782-.094-1.052-.094 10.513m7.737 0c0 11.564.043 16.295.094 10.513.052-5.782.052-15.244 0-21.026-.051-5.782-.094-1.052-.094 10.513m53.154 0c0 11.564.043 16.295.094 10.513.052-5.782.052-15.244 0-21.026-.051-5.782-.094-1.052-.094 10.513m7.728-14.031c-.092.24-.121 2.7-.064 5.467l.103 5.031.075-5.294.074-5.294 11.354-.093 11.354-.093-11.364-.08c-9.045-.063-11.399.01-11.532.356m20.105 13.605l-.068 3.107-10.009.089-10.008.089-.013 5.636-.012 5.635.105-5.551.104-5.552h9.927c7.963 0 9.961-.088 10.099-.448.095-.247.121-1.723.058-3.28l-.114-2.832-.069 3.107m-94.813 17.919c0 1.943.055 2.738.123 1.767.068-.972.068-2.561 0-3.533-.068-.971-.123-.176-.123 1.766m98.23 0c0 1.758.057 2.477.126 1.598.069-.878.069-2.317 0-3.196-.069-.878-.126-.159-.126 1.598"
            ></path>
            <path
              fill="#1c1c1c"
              d="M147.519 5.614c-26.949 1.389-53.9 10.323-77.208 25.592-5.956 3.901-22.839 16.718-22.484 17.068.062.06 4.101.887 8.975 1.837 36.211 7.054 64.579 20.151 90.212 41.649 7.595 6.369 18.373 17.41 20.039 20.527.027.05 2.304-.879 5.06-2.064 37.276-16.034 80.235-17.857 120.012-5.093 4.412 1.415 8.109 2.486 8.216 2.379.563-.563-10.807-22.717-15.461-30.124-29.659-47.211-82.114-74.619-137.361-71.771m18.503 13.909c40.615 3.418 76.472 23.345 100.778 56.003 3.593 4.828 7.193 10.223 6.97 10.446-.079.079-2.63-.226-5.67-.678-31.846-4.736-64.845-1.67-92.325 8.576l-4.376 1.632-5.044-4.942c-22.169-21.722-50.417-38.366-81.037-47.747l-5.199-1.593 3.591-2.132c18.754-11.136 40.612-18.079 61.959-19.681 3.598-.27 16.653-.196 20.353.116M35.051 71.405c-3.719 4.973-5.954 8.267-5.748 8.472.074.075 2.361.38 5.08.678 50.692 5.555 92.719 34.578 116.824 80.674 1.693 3.237 2.732 4.883 2.986 4.731.215-.127 2.283-1.616 4.596-3.307 42.354-30.967 94.258-38.283 141.884-19.998l2.439.936v-.801c0-1.229-.943-7.293-1.776-11.419l-.747-3.701-3.274-1.099c-42.913-14.414-93.897-8.583-133.36 15.253l-5.205 3.144-.727-1.248c-22.635-38.848-65.665-67.945-112.04-75.763-8.198-1.382-7.049-1.744-10.932 3.448M15.185 101.85c-.799 1.501-4.885 14.251-6.064 18.924-22.475 89.046 39.058 177.551 130.156 187.204l6.128.652c1.243.133 1.253.124 1.963-1.767 35.464-94.538-26.067-194.762-125.912-205.089-6.118-.633-5.892-.636-6.271.076m29.27 18.243c5.469 1.577 11.935 3.889 16.638 5.949l3.418 1.497-.769 3.093c-.423 1.702-1.937 7.912-3.365 13.801-1.428 5.888-2.704 10.581-2.835 10.428-.218-.254-22.845-36.117-23.341-36.994-.28-.495 4.165.47 10.254 2.226M34.429 144.09c6.592 10.442 11.39 18.36 11.062 18.258-.319-.1-6.558-1.634-13.866-3.41-7.307-1.776-13.348-3.291-13.424-3.366-.825-.826 1.91-22.557 3.655-29.039.497-1.843-.956-3.871 12.573 17.557m46.768-7.263c5.652 3.648 14.34 10.304 14.351 10.996.015.967-11.276 48.916-11.488 48.785-.134-.082-3.812-5.801-8.174-12.708l-7.931-12.558 4.385-17.967c5.109-20.932 4.642-19.216 5.144-18.921.218.128 1.889 1.196 3.713 2.373m159.304 19.42c-.082.082-1.583.177-3.336.211-11.717.229-32.975 5.376-47.384 11.472-7.652 3.237-21.475 10.591-24.659 13.12-.515.409-.362.876 1.779 5.435 17.511 37.294 18.271 74.692 2.319 114.149-3.268 8.083-3.302 8.197-2.473 8.197 1.792 0 16.702-2.445 21.815-3.578 63.302-14.022 109.714-66.044 117.044-131.19.753-6.688.754-6.677-.56-7.118-.601-.203-3.742-1.299-6.98-2.437-16.201-5.694-32.503-8.41-50.474-8.41-3.818 0-7.009.067-7.091.149m-130.211 5.931c3.187 3.661 8.511 10.728 11.083 14.714l2.022 3.132-.41 1.746c-3.83 16.321-13.143 54.957-13.287 55.125-.107.124-3.562-5.113-7.678-11.638l-7.484-11.863 6.298-27.137c3.671-15.82 6.442-27.091 6.643-27.026.189.062 1.455 1.388 2.813 2.947m-66.611 13.838l12.898 3.142 7.855 12.433c4.32 6.838 7.813 12.475 7.762 12.526-.051.051-11.164-2.293-24.695-5.208l-24.603-5.301-1.016-4.268c-1.129-4.739-2.548-12.994-2.899-16.862l-.228-2.518 6.014 1.457c3.309.801 11.819 2.871 18.912 4.599m211.146-5.032c-6.695 31.453-32.149 65.361-59.641 79.452l-1.116.572.22-2.291c.27-2.8-.334-15.011-1.011-20.475-.273-2.2-.386-4.091-.251-4.204.135-.112 1.532-1.164 3.105-2.338 16.222-12.111 28.888-29.861 34.33-48.109.414-1.387.819-2.599.901-2.691.367-.419 8.7-.927 15.847-.966l7.849-.043-.233 1.093m21.037 1.618c4.829.953 14.216 3.447 15.151 4.024 1.034.639-2.077 15.052-5.387 24.963-14.642 43.837-50.982 77.847-95.169 89.068-3.456.878-3.26 1.363-1.699-4.199 1.277-4.551 2.87-11.874 3.677-16.895l.39-2.429 5.101-2.635c36.103-18.646 61.383-51.674 70.67-92.328.241-1.052-.455-1.094 7.266.431m-60.777 3.092c-4.686 11.628-13.982 24.32-23.543 32.143l-1.729 1.415-.74-2.776c-1.023-3.836-3.706-11.841-5.358-15.987-.757-1.9-1.377-3.526-1.377-3.614 0-.253 8.312-4.349 12.145-5.984 6.059-2.584 16.009-5.973 21.389-7.285.033-.008-.321.931-.787 2.088m-80.586 26.661c8.456 21.273 11.306 45.357 8.103 68.461-.645 4.652-2.069 12.058-2.589 13.464-.233.628-19.385-28.978-19.818-30.635-.128-.49 12.702-54.926 12.898-54.725.038.039.67 1.585 1.406 3.435m-78.5 12.418c14.795 3.207 26.948 5.965 27.007 6.127.059.162 3.566 5.744 7.793 12.405s7.515 12.143 7.308 12.181c-.208.038-13.094-2.611-28.637-5.887l-28.259-5.957-1.682-2.546c-3.439-5.206-9.913-17.726-11.077-21.424-.32-1.017-2.688-1.455 27.547 5.101m30.813 42.471l22.052 4.627 9.632 15.238c5.298 8.381 9.447 15.238 9.22 15.238-1.082 0-11.672-2.879-16.095-4.375-19.754-6.684-36.822-17.211-51.907-32.012l-5.719-5.612 5.383 1.134c2.96.624 15.306 3.217 27.434 5.762"
            ></path>
          </g>
        </svg>
      }
    </>
  );
});