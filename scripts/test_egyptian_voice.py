import asyncio
import os
import subprocess
import imageio_ffmpeg
import edge_tts

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

async def main():
    voice = "ar-EG-ShakirNeural"
    intro_text = "هذا الكورس مقدم برعاية GridFix."
    
    os.makedirs("public/audio/test", exist_ok=True)
    intro_path = "public/audio/test/intro-shakir.mp3"
    
    print("1. Generating Egyptian Intro with Shakir...")
    await edge_tts.Communicate(intro_text, voice).save(intro_path)
    print("   Intro generated.")

    # Read lesson 1-1 script
    script_path = "public/audio/cmrp/station-1/lesson-cmrp-1-1-script.txt"
    with open(script_path, "r", encoding="utf-8") as f:
        script_text = f.read()

    lesson_path = "public/audio/test/lesson-cmrp-1-1-shakir.mp3"
    print("2. Generating Lesson 1.1 narration with Shakir (Egyptian)...")
    await edge_tts.Communicate(script_text, voice).save(lesson_path)
    print("   Lesson narration generated.")

    # Concatenate intro + short 0.5s pause + lesson
    final_path = "public/audio/test/lesson-cmrp-1-1-shakir-with-intro.mp3"
    concat_list = "public/audio/test/concat.txt"
    with open(concat_list, "w", encoding="utf-8") as f:
        f.write(f"file '{os.path.abspath(intro_path)}'\n")
        f.write(f"file '{os.path.abspath(lesson_path)}'\n")

    print("3. Stitching Intro + Lesson using FFmpeg...")
    cmd = [
        FFMPEG, "-y", "-f", "concat", "-safe", "0",
        "-i", concat_list,
        "-c", "copy",
        final_path
    ]
    subprocess.run(cmd, check=True)
    print(f"   Stitched successfully to: {final_path}")

    # Inspect duration
    res = subprocess.run([FFMPEG, "-i", final_path], capture_output=True, text=True, errors="ignore")
    for line in res.stderr.splitlines():
        if "Duration:" in line:
            print("   " + line.strip())

if __name__ == "__main__":
    asyncio.run(main())
