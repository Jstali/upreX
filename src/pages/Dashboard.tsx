import React, { useState } from 'react';
import { getFolders, getFolderItems, getWallpapers, getStickyNotes } from '../utils/sanity';

interface DashboardProps {
  onNavigate: (path: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const folders = getFolders();
  const allItems = getFolderItems();
  const wallpapers = getWallpapers();
  const stickyNotes = getStickyNotes();

  const [activeFolderId, setActiveFolderId] = useState<string | null>(folders[0]?.id || null);
  const [windowOpen, setWindowOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeWallpaper, setActiveWallpaper] = useState<string>(
    wallpapers[0]?.image || ''
  );
  const [wallpaperModalOpen, setWallpaperModalOpen] = useState(false);

  const currentFolder = folders.find((f) => f.id === activeFolderId) || folders[0];
  const currentItems = currentFolder?.itemRefs?.length
    ? allItems.filter((item) => currentFolder.itemRefs.includes(item.id))
    : allItems;

  return (
    <div
      className="relative w-full min-h-[92vh] pt-20 px-6 pb-20 select-none overflow-hidden"
      style={{
        backgroundImage: activeWallpaper ? `url(${activeWallpaper})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay if wallpaper is set */}
      {activeWallpaper && <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0" />}

      {/* Desktop Header Info */}
      <div className="relative z-10 flex justify-between items-center mb-8 text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          <span className="uppercase tracking-wider text-neutral-200">DGB HQ Desktop OS v2.4</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setWallpaperModalOpen(true)}
            className="hover:text-white transition-colors underline"
          >
            [ Change Wallpaper ]
          </button>
        </div>
      </div>

      {/* DESKTOP ICONS GRID (Left Side) */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        {/* Desktop Folder Icons */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full md:w-36">
          {folders.map((folder) => {
            const isSelected = activeFolderId === folder.id;
            return (
              <div
                key={folder.id}
                onClick={() => {
                  setActiveFolderId(folder.id);
                  setWindowOpen(true);
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                  isSelected ? 'bg-white/20 border border-white/40' : 'hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📁
                </div>
                <span className="mt-2 text-center font-mono text-[11px] text-white tracking-tight leading-tight px-1 rounded bg-black/50">
                  {folder.title}
                </span>
              </div>
            );
          })}

          {/* Trash Icon */}
          <div
            onClick={() => {
              setActiveFolderId(null);
              setWindowOpen(true);
            }}
            className="flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              🗑️
            </div>
            <span className="mt-2 text-center font-mono text-[11px] text-white tracking-tight leading-tight px-1 rounded bg-black/50">
              Trash Bin
            </span>
          </div>
        </div>

        {/* MAIN OS FINDER WINDOW */}
        {windowOpen && (
          <div className="flex-1 max-w-4xl rounded-xl border border-white/20 bg-neutral-900/90 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            {/* Window Titlebar */}
            <div className="h-10 px-4 bg-neutral-800/80 border-b border-white/10 flex items-center justify-between">
              {/* Traffic Lights */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setWindowOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                  title="Close Window"
                />
                <button
                  onClick={() => setWindowOpen(false)}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
                  title="Minimize"
                />
                <button
                  className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity"
                  title="Maximize"
                />
              </div>

              {/* Title */}
              <div className="font-mono text-xs text-neutral-300 flex items-center space-x-2">
                <span>📁</span>
                <span>{currentFolder?.title || 'All Archives'}</span>
                <span className="text-neutral-500">({currentItems.length} items)</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Window Content Grid */}
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-h-[550px] overflow-y-auto">
              {currentItems.length === 0 ? (
                <div className="col-span-full py-16 text-center text-neutral-500 font-mono text-xs">
                  This folder is currently empty.
                </div>
              ) : (
                currentItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="flex flex-col items-center p-3 rounded-lg border border-transparent hover:border-white/20 hover:bg-white/5 cursor-pointer transition-all duration-150 group text-center"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-neutral-800 border border-white/10 mb-2 flex items-center justify-center relative">
                      {item.mediaUrl ? (
                        <img
                          src={item.mediaUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-3xl">📄</span>
                      )}
                    </div>
                    <span className="font-sans text-xs font-semibold text-neutral-200 truncate w-full">
                      {item.title}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 capitalize">
                      {item.type}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Window Status Bar */}
            <div className="h-8 px-4 bg-neutral-800/40 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>{currentItems.length} items selected</span>
              <span>Available Space: 512 GB</span>
            </div>
          </div>
        )}

        {/* STICKY NOTES ON DESKTOP (Right Side) */}
        <div className="hidden lg:flex flex-col space-y-6 w-64">
          {stickyNotes.slice(0, 3).map((note, idx) => (
            <div
              key={note.id || idx}
              className="p-4 rounded-lg shadow-xl font-mono text-xs text-neutral-900 transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: note.color || '#fffb91',
                transform: `rotate(${note.rotation || (idx % 2 === 0 ? -2 : 3)}deg)`,
              }}
            >
              <div className="font-bold text-[10px] uppercase tracking-wider text-neutral-600 mb-1 border-b border-black/10 pb-1">
                Memo #{idx + 1}
              </div>
              <p className="leading-snug">{note.text || 'Launch fast. Iterate in public. Keep it unapologetically bold.'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ITEM PREVIEW MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-2xl w-full bg-neutral-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 relative flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="font-sans font-bold text-lg text-white">
                {selectedItem.title}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            {selectedItem.mediaUrl && (
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedItem.mediaUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {selectedItem.description ||
                'Confidential brand assets and project blueprints from the Damn Good Brands vault.'}
            </p>

            {selectedItem.url && (
              <a
                href={selectedItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-start px-5 py-2.5 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Visit Project ↗
              </a>
            )}
          </div>
        </div>
      )}

      {/* WALLPAPER SWITCHER MODAL */}
      {wallpaperModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setWallpaperModalOpen(false)}
        >
          <div
            className="max-w-xl w-full bg-neutral-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-bold text-lg text-white">Select Desktop Wallpaper</h3>
              <button
                onClick={() => setWallpaperModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => {
                  setActiveWallpaper('');
                  setWallpaperModalOpen(false);
                }}
                className={`aspect-video rounded-lg border-2 cursor-pointer p-2 flex items-center justify-center font-mono text-xs ${
                  !activeWallpaper ? 'border-white bg-neutral-800 text-white' : 'border-neutral-700 bg-neutral-950 text-neutral-400'
                }`}
              >
                Default Void Black
              </div>
              {wallpapers.map((wp) => (
                <div
                  key={wp.id}
                  onClick={() => {
                    setActiveWallpaper(wp.image);
                    setWallpaperModalOpen(false);
                  }}
                  className={`aspect-video rounded-lg border-2 overflow-hidden cursor-pointer relative group ${
                    activeWallpaper === wp.image ? 'border-white' : 'border-neutral-700 hover:border-white/50'
                  }`}
                >
                  <img src={wp.image} alt={wp.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-xs text-white">{wp.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
