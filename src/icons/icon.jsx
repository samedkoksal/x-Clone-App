import React from "react";

const Svg = ({ children }) => {
  return <svg viewBox="0 0 24 24">{children}</svg>;
};

export const HomeIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl font-bold tracking-wide bg-transparent font-chirp mt-1">
      <svg
        viewBox="0 0 24 24"
        width={27.25}
        height={27.25}
        className="bg-transparent"
      >
        <path
          d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7. 913L8.5 20H4V8.773l8.011-5.342L20 8.764z"
          fill="#b6b7b6"
        />
      </svg>
      Home
    </div>
  );
};

export const ExploreIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          fill="#e0e1e0 "
        />
      </svg>
      Explore
    </div>
  );
};

export const NotificationIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
          fill="#e0e1e0 "
        />
      </svg>
      Notifications
    </div>
  );
};

export const MessagesIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
          fill="#e0e1e0 "
        />
      </svg>
      Messages
    </div>
  );
};

export const GrokIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"
          fill="#e0e1e0 "
        />
        <path
          d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"
          fill="#e0e1e0 "
        />
      </svg>
      Grok
    </div>
  );
};

export const BookmarksIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          fill="#e0e1e0 "
        />
      </svg>
      Bookmarks
    </div>
  );
};

export const CommunitiesIcon = () => {
  return (
    <div className=" rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp ">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"
          fill="#e0e1e0 "
        />
      </svg>
      Communities
    </div>
  );
};

export const PremiumIcon = () => {
  return (
    <div className="rounded-full flex items-center gap-5 text-xl tracking-wide bg-transparent font-chirp">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          fill="#e0e1e0 "
        />
      </svg>
      Premium
    </div>
  );
};

export const OrgsIcon = () => {
  return (
    <div className="rounded-full items-center flex gap-5 bg-transparent text-xl tracking-wide font-chirp">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"
          fill="#b6b7b6"
        />
      </svg>
      Verified Orgs
    </div>
  );
};

export const ProfileIcon = () => {
  return (
    <div className="rounded-full items-center flex gap-5 bg-transparent text-xl tracking-wide font-chirp">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent"
      >
        <path
          d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
          fill="#b6b7b6"
        />
      </svg>
      Profile
    </div>
  );
};

export const MoreIcon = () => {
  return (
    <div className="rounded-full items-center flex gap-5 bg-transparent text-xl tracking-wide font-chirp">
      <svg
        viewBox="0 0 24 24"
        width={26.25}
        height={26.25}
        className="bg-transparent "
      >
        <path
          d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
          fill="#b6b7b6"
        />
      </svg>
      More
    </div>
  );
};

export const TripleDots = () => {
  return (
    <div className="bg-transparent">
      <svg
        viewBox="0 0 24 24"
        width={19}
        height={19}
        className="bg-transparent"
      >
        <path
          d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          fill="#FFF"
        />
      </svg>
    </div>
  );
};

export const TripleDots2 = () => {
  return (
    <div className="bg-transparent border rounded-full p-2 border-black hover:bg-[#1d9bf01a] group">
      <svg
        viewBox="0 0 24 24"
        width={19}
        group
        height={19}
        className="bg-transparent "
      >
        <path
          d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          fill="#71767b"
          className="group-hover:fill-[#1d9bf0]"
        />
      </svg>
    </div>
  );
};

// Todo Inside More Icon

export const ListIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a rounded-t-xl">
      <div className="w-26.25 h-26.25 relative ">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">Lists</div>
    </button>
  );
};

export const MonetizationIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a ">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">Monetization</div>
    </button>
  );
};

export const FollowerIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a ">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M10 10c2.209 0 4-1.79 4-4s-1.791-4-4-4-4 1.79-4 4 1.791 4 4 4zm0-6c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .895-2 2-2zm5.863 9.44C14.373 11.85 12.352 11 10 11s-4.373.85-5.863 2.44c-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46zM5.596 14.81C6.682 13.65 8.162 13 10 13s3.318.65 4.404 1.81c.921.978 1.602 2.388 1.939 4.19H3.657c.337-1.802 1.018-3.212 1.939-4.19zM24 10h-4.583l1.79 1.79-1.414 1.42-3.5-3.5-.707-.71.707-.71 3.5-3.5 1.414 1.42L19.417 8H24v2z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">
        Follower Requests
      </div>
    </button>
  );
};

export const AdsIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a ">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">Ads</div>
    </button>
  );
};

export const JobsIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a ">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">Jobs</div>
    </button>
  );
};

export const SpaceIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a ">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">
        Create Your Space
      </div>
    </button>
  );
};

export const SettingsIcon = () => {
  return (
    <button className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-gray-eff3f41a rounded-b-xl">
      <div className="w-26.25 h-26.25 relative">
        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
          <path
            d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
            fill="#FFF"
          />
        </svg>
      </div>
      <div className="pr-4 text-xl font-bold bg-transparent">
        Settings and privacy
      </div>
    </button>
  );
};

// Todo => Right Bar

const SearchIcon = () => {
  return (
    <div className="bg-transparent -mt-0.5">
      <svg
        viewBox="0 0 24 24"
        height={18.75}
        className="min-w-[32px] bg-transparent fill-[#71767b] group-focus-within:fill-primary-base"
      >
        <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
      </svg>
    </div>
  );
};

export default SearchIcon;

// ? Content Icons

export const WorldIcon = () => {
  return (
    <div className="flex items-center -mt-2 bg-transparent cursor-pointer hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={16}
        height={16}
        className="bg-transparent"
      >
        <path
          d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
      <span
        className="font-semibold font-chirp text-sm
       text-primary-dark flex items-center ml-1 bg-transparent"
      >
        Everyone can reply
      </span>
    </div>
  );
};

export const MediaIcon = () => {
  return (
    <div className="bg-transparent -ml-[14px] mr-[8px] cursor-pointer rounded-full px-1 py-1 hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent"
      >
        <path
          d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
    </div>
  );
};

export const GifIcon = () => {
  return (
    <div className="bg-transparent cursor-pointer rounded-full px-1 py-1 hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent"
      >
        <path
          d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
    </div>
  );
};

export const PullIcon = () => {
  return (
    <div className="bg-transparent ml-[8px] mr-[8px] cursor-pointer px-1 py-1 hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent"
      >
        <path
          d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
    </div>
  );
};

export const EmojiIcon = () => {
  return (
    <div className="bg-transparent mr-[8px] cursor-pointer px-1 py-1 hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent"
      >
        <path
          d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
    </div>
  );
};

export const ScheduleIcon = () => {
  return (
    <div className="bg-transparent cursor-pointer px-1 py-1 hover:bg-[#1d9bf01a]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent"
      >
        <path
          d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
          fill="rgb(13, 142, 222)"
        />
      </svg>
    </div>
  );
};

export const LocationIcon = () => {
  return (
    <div className="bg-transparent ml-[12px] mt-[4px]">
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        className="bg-transparent opacity-50"
      >
        <path
          d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
          fill="RGB(21, 79, 118) "
        />
      </svg>
    </div>
  );
};

export const AddIcon = () => {
  return (
    <div className="bg-transparent">
      <Svg>
        <g>
          <path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"></path>
        </g>
      </Svg>
    </div>
  );
};

export const ReplyIcon = () => {
  return (
    <div className="mt-3">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
          fill="#71767b"
        />
      </svg>
    </div>
  );
};

export const RepostIcon = () => {
  return (
    <div className="mt-3 bg-transparent ">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
          fill="#71767b"
          className="bg-transparent "
        />
      </svg>
    </div>
  );
};

export const LikeIcon = () => {
  return (
    <div className="mt-3 bg-transparent ">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
          fill="#71767b"
          className="bg-transparent "
        />
      </svg>
    </div>
  );
};

export const ViewIcon = () => {
  return (
    <div className="mt-3 bg-transparent ">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
          fill="#71767b"
          className="bg-transparent "
        />
      </svg>
    </div>
  );
};

export const BookmarkIcon = () => {
  return (
    <div className="mt-3 bg-transparent ">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          fill="#71767b"
          className="bg-transparent "
        />
      </svg>
    </div>
  );
};

export const ShareIcon = () => {
  return (
    <div className="mt-3 bg-transparent ">
      <svg
        viewBox="0 0 24 24"
        width={18.75}
        height={18.75}
        className="bg-transparent"
      >
        <path
          d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
          fill="#71767b"
          className="bg-transparent "
        />
      </svg>
    </div>
  );
};

// TODO X Icon
{
  /* <g>
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</g>

 TODO Tweet Icon

<g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g> 
 */
}
