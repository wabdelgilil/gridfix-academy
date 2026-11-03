import fs from 'fs';
import path from 'path';
import { lessonAudioCues } from '../src/data/audioCues';
import { curriculum } from '../src/data/curriculum';

const outputDir = path.resolve('dist/videos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Map each lesson with its curriculum metadata
const cmrpStations = curriculum.filter((s) => (s.courseId ?? 'cfm') === 'cmrp');

const manifest: Record<string, any> = {};

for (const station of cmrpStations) {
  for (const lesson of station.lessons) {
    const cues = lessonAudioCues[lesson.id] || [];
    manifest[lesson.id] = {
      id: lesson.id,
      number: lesson.number,
      title: lesson.title,
      titleEn: lesson.titleEn,
      stationNumber: station.number,
      stationTitle: station.title,
      audioPath: `public/audio/cmrp/station-${station.number}/${lesson.id}.mp3`,
      cuesCount: cues.length,
      cues: cues,
    };
  }
}

const outFile = path.join(outputDir, 'cmrp_video_manifest.json');
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2), 'utf-8');
console.log(`Successfully generated manifest with ${Object.keys(manifest).length} lessons: ${outFile}`);
