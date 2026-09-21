import sanityData from '../data/sanity_dump.json';

const PROJECT_ID = 'leima53t';
const DATASET = 'production';

export function urlForImage(refOrAsset: any): string {
  if (!refOrAsset) return '';
  if (typeof refOrAsset === 'string') {
    if (refOrAsset.startsWith('http')) return refOrAsset;
    // Format: image-77823527651f238359f05bd22f70b891c2463f38-1200x1000-png
    const imgMatch = refOrAsset.match(/^image-([a-f0-9]+)-([0-9]+x[0-9]+)-([a-z0-9]+)$/i);
    if (imgMatch) {
      const [, id, dimensions, format] = imgMatch;
      return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}`;
    }
    // Format: file-a725fcbbfb88bc63f179e3bf5051ab4b8f59325f-webp
    const fileMatch = refOrAsset.match(/^file-([a-f0-9]+)-([a-z0-9]+)$/i);
    if (fileMatch) {
      const [, id, format] = fileMatch;
      return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${format}`;
    }
  }
  if (refOrAsset.asset?._ref) {
    return urlForImage(refOrAsset.asset._ref);
  }
  if (refOrAsset.asset?._id) {
    return urlForImage(refOrAsset.asset._id);
  }
  if (refOrAsset.url) {
    return refOrAsset.url;
  }
  return '';
}

export function getSiteSettings() {
  return sanityData.find((d: any) => d._type === 'settings') || {};
}

export function getHeroIcons() {
  return sanityData
    .filter((d: any) => d._type === 'heroIcon')
    .map((d: any) => ({
      id: d._id,
      title: d.title,
      image: urlForImage(d.image),
      darkImage: urlForImage(d.darkImage) || urlForImage(d.image),
    }));
}

export function getHomeGalleryItems() {
  return sanityData
    .filter((d: any) => d._type === 'homeGalleryItem')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      image: urlForImage(d.image),
      aspectRatio: d.aspectRatio || '1/1',
      order: d.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export function toPlainText(blocks: any): string {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks;
  if (Array.isArray(blocks)) {
    return blocks
      .map((block) => {
        if (typeof block === 'string') return block;
        if (block?._type === 'block' && Array.isArray(block.children)) {
          return block.children.map((child: any) => child?.text || '').join('');
        }
        return '';
      })
      .filter(Boolean)
      .join('\n\n');
  }
  return '';
}

export function getHomeItems() {
  return sanityData
    .filter((d: any) => d._type === 'homeItem')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      text: toPlainText(d.text),
      type: d.type || 'textAndImage',
      mediaUrl: urlForImage(d.image) || (d.video?.asset?.url || ''),
      lightModeMediaUrl: urlForImage(d.lightModeImage) || '',
      layout: d.layout || 'left',
      order: d.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getFolders() {
  return sanityData
    .filter((d: any) => d._type === 'folder')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      itemRefs: (d.items || []).map((i: any) => i._ref),
      order: d.orderRank || '',
    }));
}

export function getFolderItems() {
  return sanityData
    .filter((d: any) => d._type === 'folderItem')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      type: 'brand',
      description: toPlainText(d.description),
      mediaUrl: urlForImage(d.media) || urlForImage(d.icon),
      url: d.website || '',
    }));
}

export function getWallpapers() {
  return sanityData
    .filter((d: any) => d._type === 'wallpaper')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      image: urlForImage(d.image),
    }));
}

export function getHypeboardItems() {
  return sanityData
    .filter((d: any) => d._type === 'hypeboardItem')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      quote: toPlainText(d.quote) || d.title || '',
      author: d.author || '',
      category: d.category || 'General',
      image: urlForImage(d.image),
      order: d.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getAboutItems() {
  return sanityData
    .filter((d: any) => d._type === 'aboutItem')
    .map((d: any) => ({
      id: d._id,
      title: d.title || '',
      subtitle: d.subtitle || '',
      body: toPlainText(d.body),
      year: d.year || '',
      image: urlForImage(d.image),
      order: d.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getStickyNotes() {
  return sanityData
    .filter((d: any) => d._type === 'stickyNote')
    .map((d: any) => ({
      id: d._id,
      text: toPlainText(d.text),
      color: d.color || '#fffb91',
      rotation: d.rotation || 0,
    }));
}
