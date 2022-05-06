import React from 'react';

export default function Button({ lngs, lng, i18n }) {
  return (
    <button
      style={{
        backgroundColor: 'gold',
        fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
      }}
      type="submit"
      onClick={() => i18n.changeLanguage(lng)}
    >
      {lngs[lng].nativeName}
    </button>
  );
}
