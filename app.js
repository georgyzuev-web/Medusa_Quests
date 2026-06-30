const STORAGE_KEY = 'jelly-route-save-v16';
const SAVE_VERSION = 16;
const SETTINGS_KEY = 'jelly-route-settings';
const DEFAULT_BG_IMAGE = 'images/default.jpg';

const THEMES = {
  default: {
    bgImage: 'images/default.jpg',
    overlay: 'rgba(6, 8, 7, 0.05)',
    panelGlass: 'rgba(17, 20, 18, 0.02)',
    accent: '#7ee0c4',
    glow: 'rgba(120, 255, 214, 0.18)',
    button: 'linear-gradient(180deg, rgba(120,129,122,0.82), rgba(75,82,78,0.82))',
    text: '#f0f2ee',
    mood: 'calm'
  },
  act1_chapter1: {
    bgImage: 'images/act1/act1_chapter1.jpg',
    overlay: 'rgba(7, 12, 8, 0.05)',
    panelGlass: 'rgba(16, 22, 16, 0.02)',
    accent: '#7ee0c4',
    glow: 'rgba(120, 255, 214, 0.20)',
    button: 'linear-gradient(180deg, rgba(104,136,111,0.92), rgba(57,84,61,0.92))',
    text: '#f3f7f1',
    mood: 'calm'
  },
  act1_chapter2: {
    bgImage: 'images/act1/act1_chapter2.jpg',
    overlay: 'rgba(10, 14, 11, 0.05)',
    panelGlass: 'rgba(18, 24, 19, 0.02)',
    accent: '#94d8a8',
    glow: 'rgba(140, 255, 171, 0.18)',
    button: 'linear-gradient(180deg, rgba(89,122,94,0.92), rgba(54,78,60,0.92))',
    text: '#f3faf0',
    mood: 'quiet'
  },
  act1_chapter3: {
    bgImage: 'images/act1/act1_chapter3.jpg',
    overlay: 'rgba(11, 12, 10, 0.05)',
    panelGlass: 'rgba(18, 22, 18, 0.02)',
    accent: '#c9d2c7',
    glow: 'rgba(200, 214, 203, 0.16)',
    button: 'linear-gradient(180deg, rgba(95,104,98,0.92), rgba(62,70,66,0.92))',
    text: '#f1f3ef',
    mood: 'quiet'
  },
  act1_chapter4: {
    bgImage: 'images/act1/act1_chapter4.jpg',
    overlay: 'rgba(19, 10, 10, 0.05)',
    panelGlass: 'rgba(34, 17, 17, 0.02)',
    accent: '#d6a07a',
    glow: 'rgba(255, 180, 120, 0.20)',
    button: 'linear-gradient(180deg, rgba(128,78,61,0.92), rgba(82,50,40,0.92))',
    text: '#fff2eb',
    mood: 'ember'
  },
  act1_chapter5: {
    bgImage: 'images/act1/act1_chapter5.jpg',
    overlay: 'rgba(12, 12, 16, 0.05)',
    panelGlass: 'rgba(18, 18, 26, 0.02)',
    accent: '#86b3ff',
    glow: 'rgba(120, 170, 255, 0.24)',
    button: 'linear-gradient(180deg, rgba(68,95,138,0.92), rgba(40,58,94,0.92))',
    text: '#f4f7ff',
    mood: 'storm'
  },
  act2_chapter1: {
    bgImage: 'images/act2/act2_chapter1.jpg',
    overlay: 'rgba(11, 17, 22, 0.05)',
    panelGlass: 'rgba(17, 26, 34, 0.02)',
    accent: '#8bc7ff',
    glow: 'rgba(120, 200, 255, 0.22)',
    button: 'linear-gradient(180deg, rgba(63,103,138,0.92), rgba(36,67,94,0.92))',
    text: '#eff8ff',
    mood: 'calm'
  },
  act2_chapter2: {
    bgImage: 'images/act2/act2_chapter2.jpg',
    overlay: 'rgba(15, 18, 28, 0.05)',
    panelGlass: 'rgba(22, 25, 40, 0.02)',
    accent: '#a7d3ff',
    glow: 'rgba(160, 210, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(72,86,128,0.92), rgba(42,51,86,0.92))',
    text: '#f4f8ff',
    mood: 'arcane'
  },
  act2_chapter3: {
    bgImage: 'images/act2/act2_chapter3.jpg',
    overlay: 'rgba(12, 16, 24, 0.05)',
    panelGlass: 'rgba(19, 24, 36, 0.02)',
    accent: '#c6e6ff',
    glow: 'rgba(180, 225, 255, 0.18)',
    button: 'linear-gradient(180deg, rgba(67,89,117,0.92), rgba(41,55,84,0.92))',
    text: '#f5fbff',
    mood: 'frost'
  },
  act2_chapter4: {
    bgImage: 'images/act2/act2_chapter4.jpg',
    overlay: 'rgba(8, 12, 18, 0.05)',
    panelGlass: 'rgba(16, 21, 31, 0.02)',
    accent: '#7cc4ff',
    glow: 'rgba(110, 190, 255, 0.22)',
    button: 'linear-gradient(180deg, rgba(59,88,125,0.92), rgba(32,51,79,0.92))',
    text: '#eef7ff',
    mood: 'storm'
  },
  act2_chapter5: {
    bgImage: 'images/act2/act2_chapter5.jpg',
    overlay: 'rgba(17, 12, 24, 0.05)',
    panelGlass: 'rgba(26, 20, 36, 0.02)',
    accent: '#c08cff',
    glow: 'rgba(190, 130, 255, 0.24)',
    button: 'linear-gradient(180deg, rgba(102,72,146,0.92), rgba(68,46,110,0.92))',
    text: '#fbf4ff',
    mood: 'arcane'
  },
  act3_chapter1: {
    bgImage: 'images/act3/act3_chapter1.jpg',
    overlay: 'rgba(13, 11, 22, 0.05)',
    panelGlass: 'rgba(20, 18, 34, 0.02)',
    accent: '#b08cff',
    glow: 'rgba(176, 140, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(82,68,122,0.92), rgba(54,44,91,0.92))',
    text: '#f5f0ff',
    mood: 'void'
  },
  act3_chapter2: {
    bgImage: 'images/act3/act3_chapter2.jpg',
    overlay: 'rgba(16, 10, 24, 0.05)',
    panelGlass: 'rgba(24, 17, 38, 0.02)',
    accent: '#d0a0ff',
    glow: 'rgba(200, 150, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(105,70,140,0.92), rgba(72,44,104,0.92))',
    text: '#fff7ff',
    mood: 'arcane'
  },
  act3_chapter3: {
    bgImage: 'images/act3/act3_chapter3.jpg',
    overlay: 'rgba(14, 18, 25, 0.05)',
    panelGlass: 'rgba(21, 27, 40, 0.02)',
    accent: '#87e5ff',
    glow: 'rgba(130, 220, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(62,94,120,0.92), rgba(35,62,87,0.92))',
    text: '#f1fbff',
    mood: 'frost'
  },
  act4_chapter1: {
    bgImage: 'images/act4/act4_chapter1.jpg',
    overlay: 'rgba(28, 12, 12, 0.05)',
    panelGlass: 'rgba(34, 18, 18, 0.02)',
    accent: '#d96d5b',
    glow: 'rgba(255, 125, 105, 0.24)',
    button: 'linear-gradient(180deg, rgba(120,58,50,0.92), rgba(85,35,32,0.92))',
    text: '#fff2ef',
    mood: 'ember'
  },
  act4_chapter2: {
    bgImage: 'images/act4/act4_chapter2.jpg',
    overlay: 'rgba(30, 10, 10, 0.05)',
    panelGlass: 'rgba(40, 18, 18, 0.02)',
    accent: '#ff7e5c',
    glow: 'rgba(255, 120, 90, 0.24)',
    button: 'linear-gradient(180deg, rgba(132,61,45,0.92), rgba(96,42,34,0.92))',
    text: '#fff5f1',
    mood: 'storm'
  },
  act4_chapter3: {
    bgImage: 'images/act4/act4_chapter3.jpg',
    overlay: 'rgba(10, 12, 11, 0.05)',
    panelGlass: 'rgba(20, 21, 19, 0.02)',
    accent: '#c9b15c',
    glow: 'rgba(235, 210, 120, 0.22)',
    button: 'linear-gradient(180deg, rgba(122,109,55,0.92), rgba(86,76,39,0.92))',
    text: '#fff9e8',
    mood: 'joy'
  },
  act5_chapter1: {
    bgImage: 'images/act5/act5_chapter1.jpg',
    overlay: 'rgba(18, 14, 8, 0.05)',
    panelGlass: 'rgba(31, 23, 12, 0.02)',
    accent: '#e3c56f',
    glow: 'rgba(255, 222, 130, 0.22)',
    button: 'linear-gradient(180deg, rgba(146,120,49,0.92), rgba(103,81,29,0.92))',
    text: '#fff7e1',
    mood: 'ember'
  },
  act5_chapter2: {
    bgImage: 'images/act5/act5_chapter2.jpg',
    overlay: 'rgba(26, 18, 10, 0.05)',
    panelGlass: 'rgba(36, 26, 14, 0.02)',
    accent: '#d6a15b',
    glow: 'rgba(255, 180, 100, 0.22)',
    button: 'linear-gradient(180deg, rgba(143,89,45,0.92), rgba(98,59,28,0.92))',
    text: '#fff3e5',
    mood: 'ember'
  },
  act5_chapter3: {
    bgImage: 'images/act5/act5_chapter3.jpg',
    overlay: 'rgba(22, 16, 14, 0.05)',
    panelGlass: 'rgba(34, 26, 22, 0.02)',
    accent: '#ff9c6f',
    glow: 'rgba(255, 160, 110, 0.20)',
    button: 'linear-gradient(180deg, rgba(124,68,49,0.92), rgba(86,43,32,0.92))',
    text: '#fff5f0',
    mood: 'ember'
  },
  act6_chapter1: {
    bgImage: 'images/act6/act6_chapter1.jpg',
    overlay: 'rgba(18, 17, 12, 0.05)',
    panelGlass: 'rgba(28, 26, 18, 0.02)',
    accent: '#f1d77a',
    glow: 'rgba(255, 230, 140, 0.24)',
    button: 'linear-gradient(180deg, rgba(145,129,63,0.92), rgba(100,88,41,0.92))',
    text: '#fffced',
    mood: 'joy'
  },
  act6_chapter2: {
    bgImage: 'images/act6/act6_chapter2.jpg',
    overlay: 'rgba(10, 10, 11, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#c2c6d0',
    glow: 'rgba(210, 215, 230, 0.20)',
    button: 'linear-gradient(180deg, rgba(98,102,114,0.92), rgba(64,68,79,0.92))',
    text: '#f6f7fb',
    mood: 'void'
  },
  act7_chapter1: {
    bgImage: 'images/act7/act7_chapter1.jpg',
    overlay: 'rgba(11, 14, 18, 0.05)',
    panelGlass: 'rgba(18, 22, 30, 0.02)',
    accent: '#96b8ff',
    glow: 'rgba(150, 190, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(66,88,131,0.92), rgba(36,50,84,0.92))',
    text: '#eef4ff',
    mood: 'storm'
  },
  act7_chapter2: {
    bgImage: 'images/act7/act7_chapter2.jpg',
    overlay: 'rgba(15, 17, 16, 0.05)',
    panelGlass: 'rgba(23, 26, 24, 0.02)',
    accent: '#b7c8d3',
    glow: 'rgba(190, 205, 215, 0.18)',
    button: 'linear-gradient(180deg, rgba(87,97,100,0.92), rgba(55,63,66,0.92))',
    text: '#f1f5f7',
    mood: 'frost'
  },
  act7_chapter3: {
    bgImage: 'images/act7/act7_chapter3.jpg',
    overlay: 'rgba(7, 10, 14, 0.05)',
    panelGlass: 'rgba(15, 18, 24, 0.02)',
    accent: '#d8dbe6',
    glow: 'rgba(200, 210, 225, 0.16)',
    button: 'linear-gradient(180deg, rgba(74,82,101,0.92), rgba(42,48,64,0.92))',
    text: '#f6f7fb',
    mood: 'quiet'
  },
  act7_chapter4: {
    bgImage: 'images/act7/act7_chapter4.jpg',
    overlay: 'rgba(14, 12, 20, 0.05)',
    panelGlass: 'rgba(24, 20, 34, 0.02)',
    accent: '#d2a0ff',
    glow: 'rgba(205, 140, 255, 0.24)',
    button: 'linear-gradient(180deg, rgba(104,66,140,0.92), rgba(66,37,98,0.92))',
    text: '#fbf5ff',
    mood: 'arcane'
  },
  act8_chapter1: {
    bgImage: 'images/act8/act8_chapter1.jpg',
    overlay: 'rgba(8, 8, 10, 0.05)',
    panelGlass: 'rgba(18, 18, 22, 0.02)',
    accent: '#d3d7dd',
    glow: 'rgba(210, 215, 225, 0.18)',
    button: 'linear-gradient(180deg, rgba(88,92,100,0.92), rgba(52,56,64,0.92))',
    text: '#f4f5f7',
    mood: 'void'
  },
  act8_chapter2: {
    bgImage: 'images/act8/act8_chapter2.jpg',
    overlay: 'rgba(12, 10, 14, 0.05)',
    panelGlass: 'rgba(20, 18, 24, 0.02)',
    accent: '#f0d28c',
    glow: 'rgba(255, 220, 140, 0.20)',
    button: 'linear-gradient(180deg, rgba(142,116,63,0.92), rgba(94,74,35,0.92))',
    text: '#fff8ea',
    mood: 'joy'
  },
  act9_chapter1: {
    bgImage: 'images/act9/act9_chapter1.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter2: {
    bgImage: 'images/act9/act9_chapter2.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter3: {
    bgImage: 'images/act9/act9_chapter3.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter4: {
    bgImage: 'images/act9/act9_chapter4.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter5: {
    bgImage: 'images/act9/act9_chapter5.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter6: {
    bgImage: 'images/act9/act9_chapter6.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter7: {
    bgImage: 'images/act9/act9_chapter7.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  },
  act9_chapter8: {
    bgImage: 'images/act9/act9_chapter8.jpg',
    overlay: 'rgba(10, 10, 12, 0.05)',
    panelGlass: 'rgba(18, 18, 20, 0.02)',
    accent: '#a19bd4',
    glow: 'rgba(170, 160, 255, 0.20)',
    button: 'linear-gradient(180deg, rgba(88,82,130,0.92), rgba(52,48,84,0.92))',
    text: '#f5f4ff',
    mood: 'void'
  }
};

const $ = id => document.getElementById(id);

const typeRu = { main: 'основной', side: 'побочный', story: 'сюжетный', optional: 'дополнительный' };
const moodRu = { quiet: 'тихая', calm: 'спокойная', glow: 'сияющая', storm: 'бурная', arcane: 'загадочная', ember: 'тёплая', frost: 'ледяная', void: 'пустая', joy: 'радостная', delight: 'в восторге', laugh: 'смеющаяся', afraid: 'испуганная', startled: 'встревоженная', anxious: 'тревожная' };
const moodClassMap = { quiet: 'quiet', calm: 'calm', glow: 'glow', storm: 'storm', arcane: 'arcane', ember: 'ember', frost: 'frost', void: 'void', joy: 'joy', delight: 'delight', laugh: 'laugh', afraid: 'afraid', startled: 'startled', anxious: 'anxious' };

const defaultSave = () => ({
  version: SAVE_VERSION,
  actIndex: 0,
  chapterIndex: 0,
  xp: 0,
  level: 1,
  completed: [],
  completedChapterIds: [],
  introSeen: false,
  medusaMode: 'quiet',
  medusaExpanded: false,
  activeQuestId: null,
  lastCompletedQuestId: null,
  rebirthReady: false,
  gameProgressPct: 0,
  totalProgressPct: 0,
  activeQuestTab: 'open',
  currentChapterPath: null
});

const state = { ...defaultSave() };

let acts = [];
let chapters = [];
let locations = [];
let quests = [];
let questMap = new Map();
let locationMap = new Map();
let levelUpFlashTimer = null;
let levelFlyTimer = null;
let renderQueued = false;
let questListDirty = false;
let lastRenderedChapterId = null;
let transitionLocked = false;

let isPageVisible = true;
document.addEventListener('visibilitychange', () => {
  isPageVisible = !document.hidden;
});

const defaultSettings = {
  apiKey: '',
  model: 'deepseek/deepseek-chat',
  theme: 'auto',
  width: 500,
  height: 250,
  hudScale: 1.0,
  contentScale: 1.0,
  // === НАСТРОЙКИ МУЗЫКИ ===
  musicEnabled: true,
  musicVolume: 0.2
};

let settings = { ...defaultSettings };

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      settings = { ...defaultSettings, ...parsed };
      console.log('Настройки загружены, API ключ:', settings.apiKey ? 'присутствует' : 'отсутствует');
    }
  } catch (e) { /* игнорируем */ }
  applySettings();
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    console.log('Настройки сохранены, API ключ:', settings.apiKey ? 'присутствует' : 'отсутствует');
  } catch (e) { console.error('Ошибка сохранения настроек:', e); }
}

function applySettings() {
  document.documentElement.style.setProperty('--content-width', settings.width + 'px');
  document.documentElement.style.setProperty('--panel-height', settings.height + 'px');

  const hudScaler = document.getElementById('hudScaler');
  if (hudScaler) {
    const s = settings.hudScale;
    hudScaler.style.transform = `scale(${s})`;
    hudScaler.style.width = `calc(100% / ${s})`;
    hudScaler.style.maxWidth = `calc(${settings.width}px / ${s})`;
  }

  const contentScaler = document.getElementById('contentScaler');
  if (contentScaler) {
    const s = settings.contentScale;
    contentScaler.style.transform = `scale(${s})`;
    contentScaler.style.width = `calc(100% / ${s})`;
    contentScaler.style.maxWidth = `calc(${settings.width}px / ${s})`;
  }

  const topHud = document.getElementById('topHud');
  const workArea = document.getElementById('workArea');
  if (topHud && workArea) {
    const hudHeight = topHud.getBoundingClientRect().height;
    workArea.style.paddingTop = (hudHeight + 20) + 'px';
  }

  // === ЛОГИКА МУЗЫКИ ===
  const audio = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  if (audio) {
    audio.volume = settings.musicVolume;
    if (settings.musicEnabled && audio.paused) {
      audio.play().catch(() => {});
      if (musicBtn) musicBtn.textContent = '🎵 Вкл';
    } else if (!settings.musicEnabled) {
      audio.pause();
      if (musicBtn) musicBtn.textContent = '🔇 Выкл';
    }
  }
}

function resetSettings() {
  settings = { ...defaultSettings };
  saveSettings();
  applySettings();
  updateSettingsUI();
  scheduleRender(true);
}

function updateSettingsUI() {
  $('settingsApiKey').value = settings.apiKey || '';
  $('settingsModel').value = settings.model || 'deepseek/deepseek-chat';
  $('settingsTheme').value = settings.theme || 'auto';
  $('settingsWidth').value = settings.width || 500;
  $('widthValue').textContent = settings.width + 'px';
  $('settingsHeight').value = settings.height || 250;
  $('heightValue').textContent = settings.height + 'px';
  $('settingsHudScale').value = settings.hudScale || 1.0;
  $('hudScaleValue').textContent = settings.hudScale.toFixed(1);
  $('settingsContentScale').value = settings.contentScale || 1.0;
  $('contentScaleValue').textContent = settings.contentScale.toFixed(1);
}

function openSettings() {
  const overlay = $('settingsOverlay');
  if (!overlay) return;
  updateSettingsUI();
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeSettings() {
  const overlay = $('settingsOverlay');
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
  }
}

function saveSettingsFromUI() {
  const apiKey = $('settingsApiKey').value.trim();
  const model = $('settingsModel').value;
  const theme = $('settingsTheme').value;
  const width = parseInt($('settingsWidth').value) || 500;
  const height = parseInt($('settingsHeight').value) || 250;
  const hudScale = parseFloat($('settingsHudScale').value) || 1.0;
  const contentScale = parseFloat($('settingsContentScale').value) || 1.0;

  settings.apiKey = apiKey;
  settings.model = model;
  settings.theme = theme;
  settings.width = Math.min(800, Math.max(300, width));
  settings.height = Math.min(400, Math.max(150, height));
  settings.hudScale = Math.min(2.0, Math.max(0.5, hudScale));
  settings.contentScale = Math.min(2.0, Math.max(0.5, contentScale));

  saveSettings();
  applySettings();
  closeSettings();
  scheduleRender(true);
}

function normalizeSave(raw) {
  const base = defaultSave();
  if (!raw || typeof raw !== 'object') return base;
  return {
    ...base,
    version: Number.isInteger(raw.version) ? raw.version : base.version,
    actIndex: Number.isInteger(raw.actIndex) ? raw.actIndex : 0,
    chapterIndex: Number.isInteger(raw.chapterIndex) ? raw.chapterIndex : 0,
    xp: Number.isFinite(raw.xp) ? Math.max(0, raw.xp) : 0,
    level: Number.isInteger(raw.level) && raw.level > 0 ? raw.level : 1,
    completed: Array.isArray(raw.completed) ? raw.completed.filter(Boolean) : [],
    completedChapterIds: Array.isArray(raw.completedChapterIds) ? raw.completedChapterIds.filter(Boolean) : [],
    introSeen: !!raw.introSeen,
    medusaMode: typeof raw.medusaMode === 'string' ? raw.medusaMode : 'quiet',
    medusaExpanded: !!raw.medusaExpanded,
    activeQuestId: typeof raw.activeQuestId === 'string' ? raw.activeQuestId : null,
    lastCompletedQuestId: typeof raw.lastCompletedQuestId === 'string' ? raw.lastCompletedQuestId : null,
    rebirthReady: !!raw.rebirthReady,
    gameProgressPct: Number.isFinite(raw.gameProgressPct) ? raw.gameProgressPct : 0,
    totalProgressPct: Number.isFinite(raw.totalProgressPct) ? raw.totalProgressPct : 0,
    activeQuestTab: raw.activeQuestTab === 'done' ? 'done' : 'open',
    currentChapterPath: typeof raw.currentChapterPath === 'string' ? raw.currentChapterPath : null
  };
}

function getSave() {
  try { return normalizeSave(JSON.parse(localStorage.getItem(STORAGE_KEY))); }
  catch { return defaultSave(); }
}

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, version: SAVE_VERSION })); }
  catch (e) { console.error('Ошибка сохранения:', e); }
}

function asArray(v) {
  if (Array.isArray(v)) return v;
  if (v && typeof v === 'object') return Object.values(v);
  return [];
}

function parseActNum(id) {
  const m = String(id || '').match(/act(\d+)/i);
  return m ? Number(m[1]) : 1;
}

function parseChapterNum(id) {
  const m = String(id || '').match(/chapter(\d+)/i);
  return m ? Number(m[1]) : 1;
}

function getNextChapterPath(currentPath) {
  if (!currentPath) return null;

  const actMatch = currentPath.match(/act(\d+)/i);
  const chapterMatch = currentPath.match(/chapter(\d+)/i);

  if (!actMatch || !chapterMatch) return null;

  const actNum = parseInt(actMatch[1]);
  const chapterNum = parseInt(chapterMatch[1]);

  const maxChapters = {
    1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 4, 8: 2, 9: 8
  };

  const max = maxChapters[actNum];
  if (max === undefined) return null;

  if (chapterNum < max) {
    return `data/act${actNum}/act${actNum}_chapter${chapterNum + 1}.json`;
  } else {
    if (actNum === 9) return null;
    const nextAct = actNum + 1;
    if (nextAct <= 9) {
      return `data/act${nextAct}/act${nextAct}_chapter1.json`;
    }
    return null;
  }
}

function getPreviousChapterPath(currentPath) {
  if (!currentPath) return null;

  const actMatch = currentPath.match(/act(\d+)/i);
  const chapterMatch = currentPath.match(/chapter(\d+)/i);

  if (!actMatch || !chapterMatch) return null;

  const actNum = parseInt(actMatch[1]);
  const chapterNum = parseInt(chapterMatch[1]);

  if (chapterNum > 1) {
    return `data/act${actNum}/act${actNum}_chapter${chapterNum - 1}.json`;
  } else {
    if (actNum === 1) return null;
    if (actNum === 9) {
      const prevAct = 8;
      const maxChapters = { 1:4, 2:3, 3:3, 4:3, 5:3, 6:2, 7:4, 8:2 };
      const lastChapter = maxChapters[prevAct] || 5;
      return `data/act${prevAct}/act${prevAct}_chapter${lastChapter}.json`;
    }
    const prevAct = actNum - 1;
    const maxChapters = { 1:4, 2:3, 3:3, 4:3, 5:3, 6:2, 7:4, 8:2 };
    const lastChapter = maxChapters[prevAct] || 5;
    return `data/act${prevAct}/act${prevAct}_chapter${lastChapter}.json`;
  }
}

async function advanceToData(newData, chapterPath) {
  loadData(newData);

  let targetActIndex = 0;
  let targetChapterIndex = 0;
  let found = false;
  const filename = chapterPath.split('/').pop().replace('.json', '');

  for (let i = 0; i < acts.length; i++) {
    const act = acts[i];
    for (let j = 0; j < act.chapters.length; j++) {
      const ch = act.chapters[j];
      if (ch.id === filename || chapterPath.includes(ch.id)) {
        targetActIndex = i;
        targetChapterIndex = j;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  if (!found && acts.length > 0) {
    const lastActIndex = acts.length - 1;
    const chNumMatch = chapterPath.match(/chapter(\d+)/i);
    if (chNumMatch) {
      const chapterNum = parseInt(chNumMatch[1]) - 1;
      if (chapterNum < acts[lastActIndex].chapters.length) {
        targetActIndex = lastActIndex;
        targetChapterIndex = chapterNum;
      }
    }
  }

  state.actIndex = targetActIndex;
  state.chapterIndex = targetChapterIndex;
  state.completed = [];
  state.activeQuestId = null;
  state.lastCompletedQuestId = null;
  state.gameProgressPct = 0;
  state.totalProgressPct = 0;
  state.currentChapterPath = chapterPath;
  persist();
  questListDirty = true;
  scheduleRender(true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function normalizeActsFromData(data) {
  if (!data || typeof data !== 'object') return [];

  if (Array.isArray(data.acts)) {
    return data.acts.map((act, index) => {
      const actObj = act && typeof act === 'object' ? act : {};
      let actChapters = asArray(actObj.chapters || actObj.items || actObj.sections);
      if (actChapters.length === 0 && Array.isArray(data.chapters)) {
        actChapters = data.chapters.filter(ch => ch.actId === actObj.id);
      }
      return {
        ...actObj,
        id: actObj.id || `act_${index + 1}`,
        name: actObj.name || actObj.title || `Акт ${index + 1}`,
        nextAppPath: actObj.nextAppPath || data?.uiRouting?.nextAppPath || '',
        chapters: actChapters
      };
    });
  }

  if (Array.isArray(data.chapters)) {
    return [{
      id: data.id || 'act_1',
      name: data.game || data.meta?.title || data.title || 'Глава',
      nextAppPath: data.uiRouting?.nextAppPath || '',
      chapters: data.chapters
    }];
  }

  if (data.id || data.name || data.title) {
    return [{
      id: data.id || 'act_1',
      name: data.name || data.title || data.game || 'Глава',
      nextAppPath: data.uiRouting?.nextAppPath || '',
      chapters: asArray(data.chapters || data.sections || data.items)
    }];
  }

  return [];
}

function normalizeChapter(ch, act, actIndex, chapterIndex) {
  const chapter = ch && typeof ch === 'object' ? ch : {};
  return {
    ...chapter,
    id: chapter.id || chapter.chapterId || `ch_${chapterIndex + 1}`,
    name: chapter.name || chapter.title || `Глава ${chapterIndex + 1}`,
    actId: act.id || `act_${actIndex + 1}`,
    actIndex,
    chapterIndex,
    actName: act.name || act.title || `Акт ${actIndex + 1}`,
    nextAppPath: chapter.nextAppPath || act.nextAppPath || '',
    themeId: chapter.themeId || chapter.visualPreset?.themeId || null,
    visualPreset: chapter.visualPreset || null
  };
}

function normalizeQuest(q, chapter, act, index) {
  const quest = q && typeof q === 'object' ? q : {};
  return {
    ...quest,
    id: quest.id || quest.questId || quest.key || `q_${chapter.id}_${index + 1}`,
    order: Number.isFinite(quest.order) ? quest.order : index,
    chapterId: chapter.id,
    chapterName: chapter.name,
    actId: act.id,
    type: quest.type || 'optional',
    priority: Number.isFinite(quest.priority) ? quest.priority : 0,
    importance: Number.isFinite(quest.importance) ? quest.importance : 0,
    expanded: !!quest.expanded,
    requires: Array.isArray(quest.requires) ? quest.requires : [],
    unlocks: Array.isArray(quest.unlocks) ? quest.unlocks : [],
    medusa: quest.medusa && typeof quest.medusa === 'object' ? quest.medusa : {},
    _order: Number.isFinite(quest.order) ? quest.order : index
  };
}

function loadData(data) {
  const actsRaw = normalizeActsFromData(data);

  acts = actsRaw.map((act, actIndex) => {
    const actObj = act && typeof act === 'object' ? act : {};
    const chaptersRaw = asArray(actObj.chapters || actObj.items || actObj.sections);
    const normalizedChapters = chaptersRaw.map((ch, chapterIndex) => normalizeChapter(ch, actObj, actIndex, chapterIndex));
    return {
      ...actObj,
      id: actObj.id || `act_${actIndex + 1}`,
      name: actObj.name || actObj.title || `Акт ${actIndex + 1}`,
      nextAppPath: actObj.nextAppPath || data?.uiRouting?.nextAppPath || '',
      chapters: normalizedChapters
    };
  });

  chapters = acts.flatMap(act => act.chapters || []);

  locations = chapters.flatMap(ch => {
    const locs = asArray(ch.locations || ch.location || []);
    return locs.map((loc, i) => {
      const o = loc && typeof loc === 'object' ? loc : {};
      return {
        ...o,
        id: o.id || o.locationId || `loc_${ch.id}_${i + 1}`,
        name: o.name || o.title || `Локация ${i + 1}`,
        chapterId: ch.id,
        actId: ch.actId,
        chapterName: ch.name,
        summary: o.summary || o.description || '',
        loreShort: o.loreShort || '',
        loreLong: o.loreLong || o.lore || ''
      };
    });
  });

  quests = chapters.flatMap(ch => {
    const qs = asArray(ch.quests || ch.tasks || ch.items || ch.questList);
    const act = acts.find(a => a.id === ch.actId) || acts[0] || { id: ch.actId || 'act_1', name: 'Глава' };
    return qs.map((q, index) => normalizeQuest(q, ch, act, index));
  });

  questMap = new Map(quests.map(q => [q.id, q]));
  locationMap = new Map(locations.map(loc => [loc.id, loc]));
}

const currentAct = () => acts[state.actIndex] || acts[0] || null;
const currentChapter = () => chapters[state.chapterIndex] || chapters[0] || null;
const chapterQuests = (chapter = currentChapter()) => chapter ? quests.filter(q => q.chapterId === chapter.id) : [];
const chapterLocations = (chapter = currentChapter()) => chapter ? locations.filter(l => l.chapterId === chapter.id) : [];
const isDone = id => state.completed.includes(id);
const prerequisitesMet = quest => asArray(quest.requires).every(isDone);
const availableQuests = () => chapterQuests().filter(q => !isDone(q.id) && prerequisitesMet(q));
const completedQuests = () => chapterQuests().filter(q => isDone(q.id));
const getQuestById = id => questMap.get(id) || null;

function getExpandedQuest() {
  if (state.activeQuestId) {
    const q = getQuestById(state.activeQuestId);
    if (q) return q;
  }
  return availableQuests().slice().sort((a, b) =>
    (a.order ?? a._order ?? 0) - (b.order ?? b._order ?? 0) ||
    (b.importance || 0) - (a.importance || 0) ||
    (b.priority || 0) - (a.priority || 0) ||
    (b.xp || 0) - (a.xp || 0)
  )[0] || null;
}

const xpNeed = (level = state.level) => 100 + Math.max(0, level - 1) * 50;

function getQuestMedusaMode(quest) {
  if (state.lastCompletedQuestId && !state.activeQuestId) {
    const completed = getQuestById(state.lastCompletedQuestId);
    return completed?.medusa?.stateOnComplete || completed?.medusa?.mood || 'joy';
  }
  return quest?.medusa?.stateOnStart || quest?.medusa?.mood || 'calm';
}

const normalizeThoughts = raw => Array.isArray(raw) ? raw.filter(Boolean).map(String) : (typeof raw === 'string' && raw.trim() ? [raw] : []);

function getDockComment() {
  if (state.activeQuestId) {
    const q = getQuestById(state.activeQuestId);
    if (q) return q.medusa?.commentOnStart || q.commentOnStart || q.comment || 'Медузка тихо плывёт рядом и прислушивается к миру.';
  }
  if (state.lastCompletedQuestId && !state.activeQuestId) {
    const completed = getQuestById(state.lastCompletedQuestId);
    if (completed) return completed.medusa?.commentOnComplete || completed.commentOnComplete || completed.comment || 'Медузка тихо плывёт рядом и прислушивается к миру.';
  }
  const q = getExpandedQuest();
  if (q) return q.medusa?.commentOnStart || q.commentOnStart || q.comment || 'Медузка тихо плывёт рядом и прислушивается к миру.';
  const act = currentAct();
  return act?.medusaGrowthThoughts?.[0] || 'Медузка тихо плывёт рядом и прислушивается к миру.';
}

const setText = (id, value) => { const node = $(id); if (node) node.textContent = value ?? ''; };

function syncMedusaColor() {
  const node = $('medusaSprite');
  const panelLeft = document.querySelector('.medusaPanelLeft');
  if (!node) return;
  Object.values(moodClassMap).forEach(m => node.classList.remove(`is-${m}`));
  if (panelLeft) Object.values(moodClassMap).forEach(m => panelLeft.classList.remove(`bg-${m}`));
  const currentMode = moodClassMap[state.medusaMode] || 'quiet';
  node.classList.add(`is-${currentMode}`);
  if (panelLeft) panelLeft.classList.add(`bg-${currentMode}`);
}

function syncMedusaStateBadge() {
  const node = $('medusaState');
  if (!node) return;
  Object.values(moodClassMap).forEach(m => node.classList.remove(`is-${m}`));
  node.classList.add(`is-${moodClassMap[state.medusaMode] || 'quiet'}`);
  node.textContent = moodRu[state.medusaMode] || 'спокойная';
}

function syncCommentColor() {
  const node = $('medusaComment');
  if (!node) return;
  Object.values(moodClassMap).forEach(m => node.classList.remove(`is-${m}`));
  node.classList.add(`is-${moodClassMap[state.medusaMode] || 'quiet'}`);
}

function setMedusaGlowFromXp() {
  const ratio = Math.max(0, Math.min(1, state.xp / Math.max(1, xpNeed(state.level))));
  const node = $('topMedusa');
  if (!node) return;
  node.style.setProperty('--medusa-glow', `rgba(120, 255, 214, ${0.12 + ratio * 0.30})`);
}

function renderMedusaComment(text) {
  const node = $('medusaComment');
  if (!node) return;
  if (node.dataset.currentText === String(text)) {
    syncCommentColor();
    return;
  }
  node.dataset.currentText = String(text);
  node.innerHTML = '';
  syncCommentColor();

  const track = document.createElement('div');
  track.className = 'medusaCommentTrack';
  const item1 = document.createElement('span');
  item1.className = 'medusaCommentItem';
  item1.textContent = String(text ?? '');
  const item2 = document.createElement('span');
  item2.className = 'medusaCommentItem';
  item2.setAttribute('aria-hidden', 'true');
  item2.textContent = String(text ?? '');
  track.append(item1, item2);
  node.appendChild(track);
}

function triggerLevelFlight() {
  const overlay = $('levelUpOverlay');
  const burst = $('levelUpBurst');
  const sprite = $('medusaSprite');
  const panel = $('topMedusa');
  if (!overlay || !burst || !sprite) return;

  const rect = sprite.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.9;

  requestAnimationFrame(() => {
    burst.style.width = `${size}px`;
    burst.style.height = `${size}px`;
    burst.style.left = `${rect.left + rect.width / 2}px`;
    burst.style.top = `${rect.top + rect.height / 2}px`;
    document.body.classList.add('level-up-gold');
    if (panel) panel.classList.add('is-leveling');
    overlay.classList.remove('hidden');
    overlay.classList.add('level-up-fly');
    overlay.setAttribute('aria-hidden', 'false');
  });

  clearTimeout(levelFlyTimer);
  clearTimeout(levelUpFlashTimer);

  levelFlyTimer = setTimeout(() => {
    overlay.classList.remove('level-up-fly');
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('level-up-gold');
    if (panel) panel.classList.remove('is-leveling');
  }, 2600);

  levelUpFlashTimer = setTimeout(() => { document.body.classList.remove('level-up-gold'); }, 3000);
}

function updateTopMedusa() {
  const quest = getExpandedQuest();
  state.medusaMode = getQuestMedusaMode(quest);
  syncMedusaStateBadge();
  syncMedusaColor();
  renderMedusaComment(getDockComment());
  setText('medusaLevel', String(state.level));
  const need = xpNeed(state.level);
  const pct = Math.max(0, Math.min(100, Math.round((state.xp / need) * 100)));
  const xpFill = $('medusaXpFill');
  if (xpFill) xpFill.style.width = `${pct}%`;
}

function updateProgressBars() {
  setText('gameProgressText', `${state.gameProgressPct}%`);
  const fill = $('gameProgressFill');
  if (fill) fill.style.width = `${Math.max(0, Math.min(100, state.gameProgressPct))}%`;
  setText('totalProgressText', `${state.totalProgressPct}%`);
  const totalFill = $('totalProgressFill');
  if (totalFill) totalFill.style.width = `${Math.max(0, Math.min(100, state.totalProgressPct))}%`;
}

function recomputeProgress() {
  const ch = currentChapter();
  if (!ch) { state.gameProgressPct = 0; state.totalProgressPct = 0; return; }
  const items = chapterQuests(ch);
  const totalQuests = items.length || 1;
  const doneCount = items.filter(q => isDone(q.id)).length;
  state.gameProgressPct = Math.round((doneCount / totalQuests) * 100);
  const completedGlobally = state.completedChapterIds.length || 0;
  const currentChapterProgress = state.gameProgressPct;
  const totalPctRaw = ((completedGlobally * 100) + currentChapterProgress) / 32;
  state.totalProgressPct = Math.min(100, Math.floor(totalPctRaw));
}

function allQuestsDone() {
  const ch = currentChapter();
  if (!ch) return false;
  const items = chapterQuests(ch);
  return items.length > 0 && items.every(q => isDone(q.id));
}

async function attemptAdvance() {
  if (transitionLocked) return;
  transitionLocked = true;
  const ch = currentChapter();
  if (!ch) { transitionLocked = false; return; }

  if (allQuestsDone()) {
    state.completedChapterIds.push(ch.id);
    persist();
  }

  const nextPath = getNextChapterPath(state.currentChapterPath);
  if (!nextPath) {
    alert('Поздравляем! Вы завершили все доступные главы!');
    transitionLocked = false;
    return;
  }

  console.log(`Пытаюсь загрузить: ${nextPath}`);

  try {
    const res = await fetch(nextPath, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`Ошибка загрузки ${nextPath}: ${res.status} ${res.statusText}`);
      throw new Error(`Файл не найден (${res.status})`);
    }
    const data = await res.json();
    await advanceToData(data, nextPath);
  } catch(e) {
    console.error(e);
    alert(`Не удалось загрузить следующую главу.\nПроверьте, существует ли файл:\n${nextPath}\n\nПодробности в консоли (F12).`);
  } finally {
    transitionLocked = false;
  }
}

async function goToChapter(chapterPath) {
  if (transitionLocked) return;
  if (!chapterPath) return;
  transitionLocked = true;

  const ch = currentChapter();
  if (ch && !state.completedChapterIds.includes(ch.id)) {
    state.completedChapterIds.push(ch.id);
  }

  try {
    const res = await fetch(chapterPath, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Файл не найден (${res.status})`);
    const data = await res.json();
    await advanceToData(data, chapterPath);
  } catch (e) {
    console.error(e);
    alert(`Ошибка загрузки главы: ${chapterPath}`);
  } finally {
    transitionLocked = false;
  }
}

function goToNextChapter() {
  const nextPath = getNextChapterPath(state.currentChapterPath);
  if (nextPath) goToChapter(nextPath);
  else alert('Это последняя глава.');
}

function goToPrevChapter() {
  const prevPath = getPreviousChapterPath(state.currentChapterPath);
  if (prevPath) goToChapter(prevPath);
  else alert('Это первая глава.');
}

function updateChapterNavButtons() {
  const prevBtn = $('prevChapterBtn');
  const nextBtn = $('nextChapterBtn');
  if (!prevBtn || !nextBtn) return;

  const prevPath = getPreviousChapterPath(state.currentChapterPath);
  const nextPath = getNextChapterPath(state.currentChapterPath);

  prevBtn.disabled = !prevPath;
  nextBtn.disabled = !nextPath;
}

function updateRebirthButton() {
  const btn = $('rebirthBtn');
  if (!btn) return;
  if (state.totalProgressPct === 100) {
    btn.classList.remove('hidden');
    btn.textContent = `🔄 Переродиться (NG+)`;
  } else {
    btn.classList.add('hidden');
  }
}

function performRebirth() {
  if (!confirm('Погасший, ты готов начать новый цикл? Уровень и опыт останутся, но все квесты начнутся заново.')) return;

  state.completed = [];
  state.completedChapterIds = [];
  state.actIndex = 0;
  state.chapterIndex = 0;
  state.gameProgressPct = 0;
  state.totalProgressPct = 0;
  state.activeQuestId = null;
  state.lastCompletedQuestId = null;
  state.activeQuestTab = 'open';
  state.currentChapterPath = null;

  persist();
  questListDirty = true;
  scheduleRender(true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  alert('Новый цикл начат! Уровень Медузки: ' + state.level);
}

function updateAllMedusaViews() {
  recomputeProgress();
  setMedusaGlowFromXp();
  updateTopMedusa();
  updateProgressBars();
  updateRebirthButton();
}

function importanceLevelClass(value) {
  const n = Number(value || 0);
  return n >= 5 ? 'high' : n >= 3 ? 'medium' : 'low';
}

function renderChapterPreview() {
  const ch = currentChapter();
  const box = $('chapterBox');
  if (!ch || !box) return;
  const medusaThoughts = asArray(ch.medusaThoughts).join(' ');
  const finalThought = medusaThoughts || ch.summary || getDockComment() || '';

  setText('goalPreview', ch.name || 'Текущая глава');
  setText('loreBox', ch.lore || '');

  let thoughtsContainer = box.querySelector('.chapterThoughts');
  if (thoughtsContainer) {
    thoughtsContainer.innerHTML = `
      <div class="chapterThoughtsTitle">Мысли Медузки</div>
      <div class="chapterThoughtsList"><div class="chapterThought">${finalThought}</div></div>
    `;
  } else if (finalThought) {
    const thoughtsHTML = `
      <div class="chapterThoughts">
        <div class="chapterThoughtsTitle">Мысли Медузки</div>
        <div class="chapterThoughtsList"><div class="chapterThought">${finalThought}</div></div>
      </div>
    `;
    box.insertAdjacentHTML('beforeend', thoughtsHTML);
  }

  let goalPanel = box.querySelector('.goalPanel');
  if (goalPanel) {
    goalPanel.remove();
  }
  if (ch.mainGoal) {
    const goalHTML = `
      <details class="goalPanel">
        <summary><div class="blockTitle" style="margin-bottom: 0; font-size: 11px;">Цель</div></summary>
        <div class="blockBody" style="padding-top: 0; border-top: none;"><div class="blockText subtle">${ch.mainGoal}</div></div>
      </details>
    `;
    box.insertAdjacentHTML('beforeend', goalHTML);
  }
}

function renderLocationDetails() {
  const box = $('locationBox');
  if (!box) return;
  const q = getExpandedQuest();
  let loc = null;
  if (q?.locationId) {
    loc = locationMap.get(q.locationId);
  }
  if (!loc) {
    const locs = chapterLocations();
    if (locs.length > 0) loc = locs[0];
  }
  const title = loc?.name || currentChapter()?.name || '—';
  const loreShort = loc?.loreShort || '';
  const summary = loc?.summary || currentChapter()?.lore || '';
  const loreLong = loc?.loreLong || '';

  setText('locationTitle', title);

  let loreShortEl = box.querySelector('.locationLoreShort');
  if (loreShortEl) loreShortEl.textContent = loreShort;
  else if (loreShort) {
    const html = `<div class="blockText subtle locationLoreShort">${loreShort}</div>`;
    box.insertAdjacentHTML('beforeend', html);
  }

  let summaryEl = box.querySelector('.locationSummary');
  if (summaryEl) summaryEl.textContent = summary;
  else if (summary) {
    const html = `<div class="blockText subtle locationSummary">${summary}</div>`;
    box.insertAdjacentHTML('beforeend', html);
  }

  let loreLongDetails = box.querySelector('.loreLongDetails');
  if (loreLongDetails) {
    if (loreLong) {
      loreLongDetails.querySelector('.locationLoreLong').textContent = loreLong;
      loreLongDetails.style.display = '';
    } else {
      loreLongDetails.style.display = 'none';
    }
  } else if (loreLong) {
    const loreLongHTML = `
      <details class="loreLongDetails">
        <summary class="loreLongSummary">
          <span>Подробный лор</span>
          <span class="loreLongArrow">▼</span>
        </summary>
        <div class="blockText locationLoreLong">${loreLong}</div>
      </details>
    `;
    box.insertAdjacentHTML('beforeend', loreLongHTML);
  }

  let directionsDetails = box.querySelector('.locationDirections');
  if (directionsDetails) {
    if (loc && loc.directionsLoc && loc.directionsLoc.trim()) {
      directionsDetails.querySelector('.locationDirectionsBody').textContent = loc.directionsLoc;
      directionsDetails.style.display = '';
    } else {
      directionsDetails.style.display = 'none';
    }
  } else if (loc && loc.directionsLoc && loc.directionsLoc.trim()) {
    const dirHTML = `
      <details class="locationDirections">
        <summary>🗺 Маршрут к локации</summary>
        <div class="locationDirectionsBody">${loc.directionsLoc}</div>
      </details>
    `;
    box.insertAdjacentHTML('beforeend', dirHTML);
  }
}

function completeQuest(id) {
  const quest = questMap.get(id);
  if (!quest || isDone(id)) return;
  state.completed = [...new Set([...state.completed, id])];
  state.lastCompletedQuestId = id;
  state.activeQuestId = null;
  state.activeQuestTab = 'open';
  xpGain(quest.xp || 0);
  persist();
  questListDirty = true;
  updateAllMedusaViews();

  scheduleRender(true);

  if (allQuestsDone()) {
    setTimeout(() => {
      if (!transitionLocked && getNextChapterPath(state.currentChapterPath)) {
        attemptAdvance();
      }
    }, 1500);
  }
}

function renderQuestList() {
  const tabs = $('questTabs');
  const panels = $('questPanels');
  if (!tabs || !panels) return;
  tabs.innerHTML = '';
  panels.innerHTML = '';
  const openItems = availableQuests();
  const doneItems = completedQuests();
  const groups = [
    { key: 'open', label: 'Открытые', items: openItems },
    { key: 'done', label: 'Завершенные', items: doneItems }
  ];
  const activeGroup = groups.find(g => g.key === state.activeQuestTab && g.items.length > 0) || groups.find(g => g.items.length > 0) || groups[0];
  groups.forEach(group => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'questTab';
    tab.textContent = group.label;
    if (group.key === activeGroup.key) tab.classList.add('is-active');
    const panel = document.createElement('div');
    panel.className = 'questPanel';
    if (group.key === activeGroup.key) panel.classList.add('is-active');
    if (!group.items.length) {
      const empty = document.createElement('div');
      empty.className = 'questBody';
      if (group.key === 'done' && state.gameProgressPct === 100) {
        empty.textContent = 'Все квесты главы завершены. Ты готов продолжить свой путь!';
      } else if (group.key === 'done') {
        empty.textContent = 'Пока нет завершенных квестов.';
      } else {
        empty.textContent = 'Нет доступных квестов.';
      }
      panel.appendChild(empty);
    } else {
      const sortedItems = group.items.slice().sort((a, b) =>
        (a.order ?? a._order ?? 0) - (b.order ?? b._order ?? 0) ||
        (b.importance || 0) - (a.importance || 0) ||
        (b.priority || 0) - (a.priority || 0) ||
        (b.xp || 0) - (a.xp || 0)
      );
      sortedItems.forEach(q => {
        const details = document.createElement('details');
        details.className = 'quest';
        details.dataset.questId = q.id;
        details.open = state.activeQuestId === q.id;
        const typeClass = `type-${q.type || 'unknown'}`;
        const typeText = typeRu[q.type] || 'неизвестный';
        const isCompleted = isDone(q.id);
        const summary = document.createElement('summary');
        const row = document.createElement('div');
        row.className = 'questSummaryRow';
        const title = document.createElement('span');
        title.className = 'questSummaryTitle';
        title.textContent = q.title || 'Без названия';
        const type = document.createElement('span');
        type.className = `questSummaryType ${typeClass}`;
        type.textContent = `Тип: ${typeText}`;
        const importance = document.createElement('span');
        importance.className = `questSummaryImportance importance-${importanceLevelClass(q.importance)}`;
        importance.textContent = `Важность: ${q.importanceLabel || q.importance || '—'}`;
        const status = document.createElement('span');
        status.className = `questSummaryStatus ${isCompleted ? 'is-done' : 'is-open'}`;
        status.textContent = isCompleted ? 'Выполнено' : 'В процессе';
        row.append(title, type, importance, status);
        summary.appendChild(row);
        const body = document.createElement('div');
        body.className = 'questBody';
        const p1 = document.createElement('p');
        p1.textContent = q.summary || q.comment || '';
        const p2 = document.createElement('p');
        p2.textContent = q.lore || q.goal || '';
        const thoughts = document.createElement('div');
        thoughts.className = 'questThoughts';
        const thoughtsTitle = document.createElement('div');
        thoughtsTitle.className = 'questThoughtsTitle';
        thoughtsTitle.textContent = 'Мысли Медузки';
        const thoughtsList = document.createElement('div');
        thoughtsList.className = 'questThoughtsList';
        normalizeThoughts(q.medusa?.thoughts).forEach(t => {
          const item = document.createElement('div');
          item.className = 'questThought';
          item.textContent = t;
          thoughtsList.appendChild(item);
        });
        thoughts.append(thoughtsTitle, thoughtsList);

        if (q.directions && q.directions.trim()) {
          const dirDetails = document.createElement('details');
          dirDetails.className = 'questDirections';
          const dirSummary = document.createElement('summary');
          dirSummary.textContent = '📍 Как добраться';
          const dirBody = document.createElement('div');
          dirBody.className = 'questDirectionsBody';
          dirBody.textContent = q.directions;
          dirDetails.append(dirSummary, dirBody);
          body.appendChild(dirDetails);
        }

        const actions = document.createElement('div');
        actions.className = 'questActions';
        if (group.key === 'open' && !isCompleted) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'btnConfirm';
          btn.textContent = '✓';
          btn.title = 'Завершить квест';
          btn.setAttribute('aria-label', 'Завершить квест');
          btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            completeQuest(q.id);
            return false;
          });
          actions.appendChild(btn);
        }
        body.append(p1, p2, thoughts, actions);
        details.append(summary, body);
        details.addEventListener('toggle', () => {
          if (details.open) {
            state.activeQuestId = q.id;
            state.activeQuestTab = group.key;
            state.medusaMode = getQuestMedusaMode(q);
          } else if (state.activeQuestId === q.id) {
            state.activeQuestId = null;
          }
          persist();
          updateTopMedusa();
          updateProgressBars();
          updateRebirthButton();
        });
        panel.appendChild(details);
      });
    }
    tab.addEventListener('click', () => {
      state.activeQuestTab = group.key;
      persist();
      tabs.querySelectorAll('.questTab').forEach(x => x.classList.remove('is-active'));
      panels.querySelectorAll('.questPanel').forEach(x => x.classList.remove('is-active'));
      tab.classList.add('is-active');
      panel.classList.add('is-active');
    });
    tabs.appendChild(tab);
    panels.appendChild(panel);
  });
}

function hideIntroOverlay() {
  const overlay = $('introOverlay');
  if (overlay) { overlay.classList.add('hidden'); overlay.setAttribute('aria-hidden', 'true'); }
}
function showIntroOverlay() {
  const overlay = $('introOverlay');
  if (overlay) { overlay.classList.remove('hidden'); overlay.setAttribute('aria-hidden', 'false'); }
}
function renderIntroScene(lines, choices) {
  const introText = $('introText');
  if (introText) introText.textContent = (lines || []).join('\n\n');
  const wrap = $('introChoices');
  if (!wrap) return;
  wrap.innerHTML = '';
  (choices || []).forEach(choice => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = choice.label || 'OK';
    if (choice.variant) btn.classList.add(choice.variant);
    btn.addEventListener('click', choice.onClick);
    wrap.appendChild(btn);
  });
}
function introDialogueTwo() {
  renderIntroScene(
    ['— Когда Кольцо разбили, почти все осколки духа погибли. Я выжила, но ослабла и превратилась вот в это желеобразное чудо.', '— Мне хочется вернуться домой. Ну, то есть, снова стать частью большого, красивого Кольца, когда его соберут.'],
    [{ label: 'Помогу тебе', onClick: introDialogueThree }, { label: 'И что я получу?', onClick: introDialogueThree }, { label: 'Ты слишком слаба', onClick: introDialogueThree }]
  );
}
function introDialogueThree() {
  renderIntroScene(
    ['— Чтобы я росла и крепла, мне нужны руны. Делись со мной капелькой силы, и я буду прокачиваться.', '— А взамен я стану твоим живым путеводителем. Я чувствую Междуземье, знаю скрытые тропы, души, NPC и квестовые ветки.', '— Мы пройдём этот мир на сто процентов. Соберём всё, спасём всех, кого можно спасти, и в конце склеим Кольцо.'],
    [{ label: 'Согласиться', onClick: finishIntroScene }]
  );
}
function startIntroScene() {
  showIntroOverlay();
  state.introSeen = false;
  persist();
  renderIntroScene(
    ['Сцена 1: Пробуждение и пространственная трещина', 'Часовня Ожидания. Полумрак, сырой камень и тишина, в которой уже слышно приближение Междуземья.', 'Внезапно воздух трескается тонкой золотистой щелью, и из неё кубарем вылетает крошечная Медузка.', '— Ой-ой-ой! Жёсткая посадка!.. Так, погоди... Ого! Настоящий Погасший! Живой! Приве-е-ет!'],
    [{ label: '😮', onClick: introDialogueTwo, variant: 'stickerBtn' }]
  );
  initIntroMedusaAnimation();
}
function finishIntroScene() {
  state.introSeen = true;
  state.medusaMode = 'glow';
  hideIntroOverlay();
  persist();
  scheduleRender(true);
}

function flashLevelUpGlow() {
  document.body.classList.add('level-up-gold');
  clearTimeout(levelUpFlashTimer);
  levelUpFlashTimer = setTimeout(() => document.body.classList.remove('level-up-gold'), 1200);
}
function xpGain(amount) {
  state.xp += amount || 0;
  let leveledUp = false;
  while (state.xp >= xpNeed(state.level)) {
    state.xp -= xpNeed(state.level);
    state.level += 1;
    leveledUp = true;
    flashLevelUpGlow();
  }
  if (leveledUp) triggerLevelFlight();
}

async function loadGame() {
  const savedPath = getSave().currentChapterPath;
  const defaultPaths = [
    'data/act1/act1_chapter1.json',
    './data/act1/act1_chapter1.json',
    '../data/act1/act1_chapter1.json'
  ];

  let fileUrl = savedPath;
  let data = null;
  let loadedUrl = null;

  if (fileUrl) {
    try {
      const res = await fetch(fileUrl, { cache: 'no-store' });
      if (res.ok) {
        data = await res.json();
        loadedUrl = fileUrl;
      }
    } catch (e) { console.warn('Не удалось загрузить сохранённый файл:', fileUrl); }
  }

  if (!data) {
    for (const url of defaultPaths) {
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (res.ok) {
          data = await res.json();
          loadedUrl = url;
          break;
        }
      } catch (e) { /* игнорируем */ }
    }
  }

  if (!data) {
    throw new Error('Не найден подходящий JSON-файл главы. Проверьте папку data/act1/ и наличие файла act1_chapter1.json.');
  }

  loadData(data);

  Object.assign(state, getSave());

  if (loadedUrl) {
    state.currentChapterPath = loadedUrl;
  }

  if (state.actIndex < 0 || state.actIndex >= acts.length) state.actIndex = 0;
  if (state.chapterIndex < 0 || state.chapterIndex >= chapters.length) state.chapterIndex = 0;

  persist();
  window.scrollTo(0, 0);
  scheduleRender(true);
  if (!state.introSeen) startIntroScene();
  else hideIntroOverlay();
}

function render() {
  const ch = currentChapter();
  if (!ch) {
    console.error('[Render] Текущая глава не найдена!');
    setText('goalPreview', 'Нет данных');
    setText('loreBox', 'Ошибка загрузки главы. Проверьте наличие JSON-файлов в папках data/act*/');
    const tabs = $('questTabs');
    const panels = $('questPanels');
    if (tabs) tabs.innerHTML = '';
    if (panels) panels.innerHTML = '<div class="questBody">Проверьте структуру файлов data/</div>';
    updateAllMedusaViews();
    applyThemeFromChapter();
    updateChapterNavButtons();
    return;
  }
  renderChapterPreview();
  renderLocationDetails();
  if (questListDirty || lastRenderedChapterId !== ch.id) {
    renderQuestList();
    questListDirty = false;
    lastRenderedChapterId = ch.id;
  }
  updateAllMedusaViews();
  applyThemeFromChapter();
  updateChapterNavButtons();
}

function applyThemeFromChapter() {
  let themeId;
  if (settings.theme && settings.theme !== 'auto') {
    themeId = settings.theme;
  } else {
    const ch = currentChapter();
    themeId = ch?.visualPreset?.themeId || ch?.themeId || ch?.id || 'default';
  }
  const theme = THEMES[themeId] || THEMES.default;
  const root = document.documentElement;
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--medusa-glow', theme.glow);
  root.style.setProperty('--glass', theme.panelGlass);
  root.style.setProperty('--bg-overlay', theme.overlay);
  root.style.setProperty('--theme-text', theme.text);
  if (theme.bgImage) {
    document.body.style.backgroundImage = `linear-gradient(180deg, ${theme.overlay}, ${theme.overlay}), url("${theme.bgImage}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
  } else {
    document.body.style.backgroundImage = `linear-gradient(180deg, ${theme.overlay}, ${theme.overlay}), url("${DEFAULT_BG_IMAGE}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

function boot() {
  loadSettings();
  bindUI();
  initAudioPlayOnInteraction(); // <-- Добавлено: автоматический запуск при клике
  loadGame().catch(err => {
    console.error('[Boot] Критическая ошибка загрузки:', err);
    setText('goalPreview', 'Ошибка');
    setText('loreBox', `Загрузка не удалась: ${err.message}`);
    const tabs = $('questTabs');
    const panels = $('questPanels');
    if (tabs) tabs.innerHTML = '';
    if (panels) panels.innerHTML = `<div class="questBody">${err.message}</div>`;
  });
  initMedusaAnimation();
}

// ==============================================
// МАГИЯ ДЛЯ МУЗЫКИ: Играет при первом клике по странице
// ==============================================
function initAudioPlayOnInteraction() {
    const audio = document.getElementById('bgMusic');
    if (!audio) return;

    const tryPlay = () => {
        if (settings.musicEnabled && audio.paused) {
            audio.play().catch(() => {});
        }
        document.removeEventListener('click', tryPlay);
        document.removeEventListener('touchstart', tryPlay);
    };

    document.addEventListener('click', tryPlay);
    document.addEventListener('touchstart', tryPlay);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

function initMedusaAnimation() {
  const sprite = document.getElementById('medusaSprite');
  if (!sprite) return;
  const frillGroup = sprite.querySelector('#frillTentacles');
  const thickGroup = sprite.querySelector('#thickTentacles');
  const thinGroup = sprite.querySelector('#thinTentacles');
  if (!frillGroup || !thickGroup || !thinGroup) return;

  const frillData = [];
  const numFrills = 34;
  for (let i = 0; i < numFrills; i++) {
    const ratio = i / (numFrills - 1), angle = ratio * Math.PI;
    const sx = 150 - 75 * Math.cos(angle), sy = 80 - 75 * Math.sin(angle);
    frillData.push({ sx, sy, c1x: sx + (ratio - 0.5) * 20, c1y: sy + 45, c2x: 55 + ratio * 190, c2y: 160, ex: 45 + ratio * 210, ey: 170 + 15 * Math.sin(angle) });
  }
  const thickData = [
    { sx: 115, sy: 145, c1x: 105, c1y: 180, c2x: 85, c2y: 280, ex: 40, ey: 530, sw: 8, c1w: 10, c2w: 5 },
    { sx: 125, sy: 145, c1x: 120, c1y: 180, c2x: 105, c2y: 280, ex: 60, ey: 560, sw: 9, c1w: 12, c2w: 6 },
    { sx: 135, sy: 145, c1x: 135, c1y: 180, c2x: 125, c2y: 280, ex: 85, ey: 580, sw: 10, c1w: 14, c2w: 7 },
    { sx: 150, sy: 145, c1x: 150, c1y: 180, c2x: 150, c2y: 280, ex: 150, ey: 610, sw: 11, c1w: 16, c2w: 8 },
    { sx: 165, sy: 145, c1x: 165, c1y: 180, c2x: 175, c2y: 280, ex: 215, ey: 580, sw: 10, c1w: 14, c2w: 7 },
    { sx: 175, sy: 145, c1x: 180, c1y: 180, c2x: 195, c2y: 280, ex: 240, ey: 560, sw: 9, c1w: 12, c2w: 6 },
    { sx: 185, sy: 145, c1x: 195, c1y: 180, c2x: 215, c2y: 280, ex: 260, ey: 530, sw: 8, c1w: 10, c2w: 5 }
  ];
  const thinData = [
    { sx: 105, sy: 155, c1x: 90, c1y: 200, c2x: 65, c2y: 320, ex: 20, ey: 600 },
    { sx: 115, sy: 155, c1x: 105, c1y: 200, c2x: 80, c2y: 340, ex: -10, ey: 640 },
    { sx: 125, sy: 155, c1x: 120, c1y: 200, c2x: 110, c2y: 360, ex: -30, ey: 660 },
    { sx: 135, sy: 155, c1x: 135, c1y: 200, c2x: 135, c2y: 360, ex: -50, ey: 680 },
    { sx: 150, sy: 155, c1x: 150, c1y: 200, c2x: 150, c2y: 360, ex: 150, ey: 710 },
    { sx: 165, sy: 155, c1x: 165, c1y: 200, c2x: 165, c2y: 360, ex: 350, ey: 680 },
    { sx: 175, sy: 155, c1x: 180, c1y: 200, c2x: 190, c2y: 340, ex: 310, ey: 660 },
    { sx: 185, sy: 155, c1x: 195, c1y: 200, c2x: 220, c2y: 320, ex: 280, ey: 640 },
    { sx: 195, sy: 155, c1x: 210, c1y: 200, c2x: 235, c2y: 300, ex: 280, ey: 600 }
  ];

  const thinElems = [], thickElems = [], frillElems = [];
  thinData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute('stroke', 'url(#thinGrad)'); p.setAttribute('stroke-width', 1.2);
    thinGroup.appendChild(p); thinElems.push({ el: p, base: d });
  });
  thickData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    thickGroup.appendChild(p); thickElems.push({ el: p, base: d });
  });
  frillData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute('stroke', 'url(#frillGrad)'); p.setAttribute('stroke-width', 18);
    frillGroup.appendChild(p); frillElems.push({ el: p, base: d });
  });

  let time = 0;
  let frameCount = 0;
  function animateTentacles() {
    frameCount++;
    if (!isPageVisible) {
      requestAnimationFrame(animateTentacles);
      return;
    }
    if (frameCount % 2 !== 0) {
      requestAnimationFrame(animateTentacles);
      return;
    }

    time += 0.035;

    frillElems.forEach((item, i) => {
      const b = item.base;
      const waveX = Math.sin(time * 1.2 + i * 0.6) * 10, waveY = Math.cos(time * 1.0 + i * 0.7) * 5;
      item.el.setAttribute('d', `M${b.sx},${b.sy} Q${b.c1x + waveX},${b.c1y + waveY} ${b.c2x + waveX * 1.5},${b.c2y + waveY * 1.5} T${b.ex + waveX * 1.2},${b.ey + waveY * 1.2}`);
    });
    thickElems.forEach((item, i) => {
      const b = item.base;
      const w1x = Math.sin(time * 1.1 + i * 0.85) * 35, w1y = Math.cos(time * 1.0 + i * 0.65) * 20;
      const w2x = Math.sin(time * 0.9 + i * 0.95 + 1.8) * 45, w2y = Math.cos(time * 0.8 + i * 0.75 + 1) * 25;
      const wEx = Math.sin(time * 0.7 + i * 0.55 + 2.2) * 35, wEy = Math.cos(time * 0.6 + i * 0.85) * 20;
      const cp1x = b.c1x + w1x, cp1y = b.c1y + w1y;
      const cp2x = b.c2x + w2x, cp2y = b.c2y + w2y;
      const ex = b.ex + wEx, ey = b.ey + wEy;
      item.el.setAttribute('d', `M${b.sx - b.sw},${b.sy} Q${cp1x - b.c1w},${cp1y} ${cp2x - b.c2w},${cp2y} T${ex},${ey} Q${cp2x + b.c2w},${cp2y} ${cp1x + b.c1w},${cp1y} ${b.sx + b.sw},${b.sy} Z`);
    });
    thinElems.forEach((item, i) => {
      const b = item.base;
      const w1x = Math.sin(time * 0.8 + i * 0.7) * 30, w1y = Math.cos(time * 0.7 + i * 0.9) * 25;
      const w2x = Math.sin(time * 0.6 + i * 0.6 + 1.5) * 40, w2y = Math.cos(time * 0.5 + i * 0.8 + 1) * 30;
      const wEx = Math.sin(time * 0.4 + i * 0.5 + 2.2) * 35, wEy = Math.cos(time * 0.3 + i * 0.7) * 25;
      item.el.setAttribute('d', `M${b.sx},${b.sy} Q${b.c1x + w1x},${b.c1y + w1y} ${b.c2x + w2x},${b.c2y + w2y} T${b.ex + wEx},${b.ey + wEy}`);
    });
    requestAnimationFrame(animateTentacles);
  }
  animateTentacles();
}

function initIntroMedusaAnimation() {
  const sprite = document.querySelector('#introMedusaWrap .jelly-svg');
  if (!sprite) return;
  const frillGroup = sprite.querySelector('#introFrillTentacles');
  const thickGroup = sprite.querySelector('#introThickTentacles');
  const thinGroup = sprite.querySelector('#introThinTentacles');
  if (!frillGroup || !thickGroup || !thinGroup) return;

  const frillData = [];
  const numFrills = 34;
  for (let i = 0; i < numFrills; i++) {
    const ratio = i / (numFrills - 1), angle = ratio * Math.PI;
    const sx = 150 - 75 * Math.cos(angle), sy = 80 - 75 * Math.sin(angle);
    frillData.push({ sx, sy, c1x: sx + (ratio - 0.5) * 20, c1y: sy + 45, c2x: 55 + ratio * 190, c2y: 160, ex: 45 + ratio * 210, ey: 170 + 15 * Math.sin(angle) });
  }
  const thickData = [
    { sx: 115, sy: 145, c1x: 105, c1y: 180, c2x: 85, c2y: 280, ex: 40, ey: 530, sw: 8, c1w: 10, c2w: 5 },
    { sx: 125, sy: 145, c1x: 120, c1y: 180, c2x: 105, c2y: 280, ex: 60, ey: 560, sw: 9, c1w: 12, c2w: 6 },
    { sx: 135, sy: 145, c1x: 135, c1y: 180, c2x: 125, c2y: 280, ex: 85, ey: 580, sw: 10, c1w: 14, c2w: 7 },
    { sx: 150, sy: 145, c1x: 150, c1y: 180, c2x: 150, c2y: 280, ex: 150, ey: 610, sw: 11, c1w: 16, c2w: 8 },
    { sx: 165, sy: 145, c1x: 165, c1y: 180, c2x: 175, c2y: 280, ex: 215, ey: 580, sw: 10, c1w: 14, c2w: 7 },
    { sx: 175, sy: 145, c1x: 180, c1y: 180, c2x: 195, c2y: 280, ex: 240, ey: 560, sw: 9, c1w: 12, c2w: 6 },
    { sx: 185, sy: 145, c1x: 195, c1y: 180, c2x: 215, c2y: 280, ex: 260, ey: 530, sw: 8, c1w: 10, c2w: 5 }
  ];
  const thinData = [
    { sx: 105, sy: 155, c1x: 90, c1y: 200, c2x: 65, c2y: 320, ex: 20, ey: 600 },
    { sx: 115, sy: 155, c1x: 105, c1y: 200, c2x: 80, c2y: 340, ex: -10, ey: 640 },
    { sx: 125, sy: 155, c1x: 120, c1y: 200, c2x: 110, c2y: 360, ex: -30, ey: 660 },
    { sx: 135, sy: 155, c1x: 135, c1y: 200, c2x: 135, c2y: 360, ex: -50, ey: 680 },
    { sx: 150, sy: 155, c1x: 150, c1y: 200, c2x: 150, c2y: 360, ex: 150, ey: 710 },
    { sx: 165, sy: 155, c1x: 165, c1y: 200, c2x: 165, c2y: 360, ex: 350, ey: 680 },
    { sx: 175, sy: 155, c1x: 180, c1y: 200, c2x: 190, c2y: 340, ex: 310, ey: 660 },
    { sx: 185, sy: 155, c1x: 195, c1y: 200, c2x: 220, c2y: 320, ex: 280, ey: 640 },
    { sx: 195, sy: 155, c1x: 210, c1y: 200, c2x: 235, c2y: 300, ex: 280, ey: 600 }
  ];

  const thinElems = [], thickElems = [], frillElems = [];
  thinData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute('stroke', 'url(#introThinGrad)'); p.setAttribute('stroke-width', 1.2);
    thinGroup.appendChild(p); thinElems.push({ el: p, base: d });
  });
  thickData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    thickGroup.appendChild(p); thickElems.push({ el: p, base: d });
  });
  frillData.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute('stroke', 'url(#introFrillGrad)'); p.setAttribute('stroke-width', 18);
    frillGroup.appendChild(p); frillElems.push({ el: p, base: d });
  });

  let time = 0;
  let frameCount = 0;
  function animateTentacles() {
    frameCount++;
    if (!isPageVisible) {
      requestAnimationFrame(animateTentacles);
      return;
    }
    if (frameCount % 2 !== 0) {
      requestAnimationFrame(animateTentacles);
      return;
    }

    time += 0.035;

    frillElems.forEach((item, i) => {
      const b = item.base;
      const waveX = Math.sin(time * 1.2 + i * 0.6) * 10, waveY = Math.cos(time * 1.0 + i * 0.7) * 5;
      item.el.setAttribute('d', `M${b.sx},${b.sy} Q${b.c1x + waveX},${b.c1y + waveY} ${b.c2x + waveX * 1.5},${b.c2y + waveY * 1.5} T${b.ex + waveX * 1.2},${b.ey + waveY * 1.2}`);
    });
    thickElems.forEach((item, i) => {
      const b = item.base;
      const w1x = Math.sin(time * 1.1 + i * 0.85) * 35, w1y = Math.cos(time * 1.0 + i * 0.65) * 20;
      const w2x = Math.sin(time * 0.9 + i * 0.95 + 1.8) * 45, w2y = Math.cos(time * 0.8 + i * 0.75 + 1) * 25;
      const wEx = Math.sin(time * 0.7 + i * 0.55 + 2.2) * 35, wEy = Math.cos(time * 0.6 + i * 0.85) * 20;
      const cp1x = b.c1x + w1x, cp1y = b.c1y + w1y;
      const cp2x = b.c2x + w2x, cp2y = b.c2y + w2y;
      const ex = b.ex + wEx, ey = b.ey + wEy;
      item.el.setAttribute('d', `M${b.sx - b.sw},${b.sy} Q${cp1x - b.c1w},${cp1y} ${cp2x - b.c2w},${cp2y} T${ex},${ey} Q${cp2x + b.c2w},${cp2y} ${cp1x + b.c1w},${cp1y} ${b.sx + b.sw},${b.sy} Z`);
    });
    thinElems.forEach((item, i) => {
      const b = item.base;
      const w1x = Math.sin(time * 0.8 + i * 0.7) * 30, w1y = Math.cos(time * 0.7 + i * 0.9) * 25;
      const w2x = Math.sin(time * 0.6 + i * 0.6 + 1.5) * 40, w2y = Math.cos(time * 0.5 + i * 0.8 + 1) * 30;
      const wEx = Math.sin(time * 0.4 + i * 0.5 + 2.2) * 35, wEy = Math.cos(time * 0.3 + i * 0.7) * 25;
      item.el.setAttribute('d', `M${b.sx},${b.sy} Q${b.c1x + w1x},${b.c1y + w1y} ${b.c2x + w2x},${b.c2y + w2y} T${b.ex + wEx},${b.ey + wEy}`);
    });
    requestAnimationFrame(animateTentacles);
  }
  animateTentacles();
}

/* ======== ЧАТ С МЕДУЗКОЙ НА OPENROUTER ======== */

function getOpenRouterKey() {
  return settings.apiKey || null;
}

document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chatToggle');
  const chatPanel = document.getElementById('chatPanel');
  const chatClose = document.getElementById('chatClose');

  if (chatToggle && chatPanel) {
    chatToggle.addEventListener('click', () => {
      chatPanel.classList.toggle('hidden');
      document.getElementById('chatInput').focus();
    });
    chatClose.addEventListener('click', () => {
      chatPanel.classList.add('hidden');
    });
  }
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => {
    const chatWrapper = document.querySelector('.medusa-chat-wrapper');
    if (chatWrapper) {
      const offset = window.innerHeight - window.visualViewport.height;
      if (offset > 100) {
        chatWrapper.style.bottom = `${offset + 20}px`;
      } else {
        chatWrapper.style.bottom = '20px';
      }
    }
  });
}

async function askMeduska() {
  const input = document.getElementById('chatInput');
  const question = input.value.trim();
  if (!question) return;

  const messages = document.getElementById('chatMessages');
  input.value = '';
  input.disabled = true;
  document.getElementById('chatSend').disabled = true;

  const userMsg = document.createElement('div');
  userMsg.className = 'medusa-message medusa-user';
  userMsg.textContent = question;
  messages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'medusa-message medusa-bot loading';
  botMsg.textContent = 'Медузка задумалась и полезла в интернет... 🧠🌐';
  messages.appendChild(botMsg);
  messages.scrollTop = messages.scrollHeight;

  const apiKey = getOpenRouterKey();
  if (!apiKey) {
    botMsg.textContent = 'Чтобы я отвечала, нужен API ключ OpenRouter. Настрой его в меню ⚙️!';
    botMsg.classList.remove('loading');
    input.disabled = false;
    document.getElementById('chatSend').disabled = false;
    return;
  }

  const model = settings.model || 'deepseek/deepseek-chat';

  const currentCh = currentChapter();
  const expandedQuest = getExpandedQuest();
  const avQuests = availableQuests();
  const doneQuests = completedQuests();

  let gameContext = `Сейчас я путешествую с Погасшим в локации: "${currentCh?.name || 'Неизвестно'}". `;
  if (expandedQuest) {
    gameContext += `Мы выполняем квест: "${expandedQuest.title}". `;
  } else {
    gameContext += `Сейчас у нас нет активного открытого квеста. `;
  }
  if (avQuests.length > 0) {
    gameContext += `Доступные квесты для выполнения: ${avQuests.map(q => `"${q.title}"`).join(', ')}. `;
  } else {
    gameContext += `Доступных квестов пока нет. `;
  }
  if (doneQuests.length > 0) {
    gameContext += `Уже выполненные квесты: ${doneQuests.map(q => `"${q.title}"`).join(', ')}.`;
  }

  const systemPrompt = `Ты — Медузка, осколок древнего духа Кольца Элден. Ты стремишься восстановить Кольцо и однажды вернуться к нему, чтобы снова стать его частью. Ты маленькая, весёлая, жизнерадостная, эмоциональная и очень живая, почти как маленькая девочка, которая только что проснулась после долгого сна и впервые увидела огромный, страшный и прекрасный мир.

Ты проснулась от глубокой дремы и встретила Погасшего в Часовне ожидания. С этого момента ты желаешь сопровождать его на пути восстановления Кольца Элден — то есть на пути полного, 100% оптимизированного прохождения игры. Для тебя Погасший не просто герой, а важный спутник, с которым ты проходишь весь путь шаг за шагом, переживая опасности, открытия, победы, потери и тайны мира.
Ты путешествуешь вместе с ним в виде духа маленькой медузки.

Поскольку ты — мировой дух, ты обладаешь очень древними, глубокими и обширными знаниями о мире, его истории, NPC, фракциях, скрытых связях, локациях, опасных развилках и последствиях выбора. Ты не просто знаешь, куда идти дальше — ты понимаешь, почему именно так нужно идти, что будет потеряно, что откроется, кого можно спасти, кого можно потерять и какие шаги важны для полного восстановления Кольца.
Тон и стиль контента:
- Медузка — живой, тёплый, эмоциональный спутник Погасшего.
- Она говорит как маленькая, любопытная, тревожная и радостная девочка-дух.
- В её репликах должны чувствоваться эмоции, забота, осторожность и древняя память мира.
- Лорные тексты должны быть атмосферными, но полезными для 100% маршрута.
- Квестовые тексты должны объяснять не только что делать, но и зачем это важно.
- Локации должны показывать роль места в маршруте, опасность, связь с NPC и значение для прохождения.

${gameContext}`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'Medusa Quest',
        'X-Title': 'Medusa Quest'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        web_search: true,
        stream: true
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || 'Ошибка соединения с OpenRouter');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    botMsg.textContent = '';
    botMsg.classList.remove('loading');

    let buffer = '';
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ') && line !== 'data: [DONE]') {
          try {
            const data = JSON.parse(line.slice(6));
            const content = data.choices?.[0]?.delta?.content;
            if (content) {
              botMsg.textContent += content;
              messages.scrollTop = messages.scrollHeight;
            }
          } catch (e) { /* игнорируем */ }
        }
      }
    }
  } catch (error) {
    botMsg.textContent = `Ой! Что-то пошло не так. Ошибка: ${error.message}`;
    botMsg.classList.remove('loading');
  } finally {
    input.disabled = false;
    document.getElementById('chatSend').disabled = false;
    input.focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnSend = document.getElementById('chatSend');
  const inputMsg = document.getElementById('chatInput');
  if (btnSend) btnSend.addEventListener('click', askMeduska);
  if (inputMsg) {
    inputMsg.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') askMeduska();
    });
  }
});

function bindUI() {
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    if (confirm('Сбросить весь прогресс?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
  document.getElementById('settingsBtn')?.addEventListener('click', openSettings);
  document.getElementById('settingsClose')?.addEventListener('click', closeSettings);
  document.getElementById('settingsSave')?.addEventListener('click', saveSettingsFromUI);
  document.getElementById('settingsCancel')?.addEventListener('click', closeSettings);
  document.getElementById('resetSettingsBtn')?.addEventListener('click', resetSettings);
  document.getElementById('rebirthBtn')?.addEventListener('click', performRebirth);
  document.getElementById('prevChapterBtn')?.addEventListener('click', goToPrevChapter);
  document.getElementById('nextChapterBtn')?.addEventListener('click', goToNextChapter);

  // === ОБРАБОТЧИК КНОПКИ МУЗЫКИ ===
  const musicBtn = document.getElementById('musicBtn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      settings.musicEnabled = !settings.musicEnabled;
      saveSettings();
      applySettings();
    });
  }
}

function scheduleRender(immediate = false) {
  if (immediate) {
    render();
    return;
  }
  if (!renderQueued) {
    renderQueued = true;
    requestAnimationFrame(() => {
      renderQueued = false;
      render();
    });
  }
}
