import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulqvlpivgqiehfjolxiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscXZscGl2Z3FpZWhmam9seGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzg5MjYsImV4cCI6MjA2MjkxNDkyNn0.w7Ax4y77ez9lBkneUayCE0rtngd-ewYr13jE1pazJos';
export const supabase = createClient(supabaseUrl, supabaseKey);