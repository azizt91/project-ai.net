import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://farcbnbsxskdytwpupfb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcmNibmJzeHNrZHl0d3B1cGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTA1NjQsImV4cCI6MjEwMDQyNjU2NH0.jpAqnZuZRXlGrlwW-OZIRVA1eVP81_AwcRANDWpQHx4';

export const supabase = createClient(supabaseUrl, supabaseKey);
